"use server";

import { Resend } from "resend";

export const submitAction = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");

  try {
    if (!email) {
      throw new Error("email is required");
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
