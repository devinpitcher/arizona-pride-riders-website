"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { Resend } from "resend";
import { headers } from "next/headers";

export const submitAction = async (prevState: any, formData: FormData) => {
  const { env, cf, ctx } = getRequestContext();

  const email = formData.get("email") as string | null | undefined;
  const token = formData.get("cf-turnstile-response") as
    | string
    | null
    | undefined;

  try {
    if (!email) {
      throw new Error("Email is required");
    }

    if (!token) {
      throw new Error("Turnstile not solved");
    }

    const ip = headers().get("CF-Connecting-IP");

    let cfFormData = new FormData();
    cfFormData.append("secret", process.env.TURNSTILE_SECRET_KEY!);
    cfFormData.append("response", token);

    if (ip) {
      cfFormData.append("remoteip", ip);
    }

    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        body: cfFormData,
        method: "POST",
      },
    );

    const outcome = await result.json();

    if (!outcome.success) {
      return { error: true };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.contacts.create({
      email: email as string,
      audienceId: process.env.RESEND_AUDIENCE_ID ?? "",
    });

    return { success: true };
  } catch (e) {
    return { error: true };
  }
};
