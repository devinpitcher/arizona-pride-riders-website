"use client";

import { useActionState } from "react";
import { submitAction } from "@/app/components/actions";

export const EmailSignupForm = () => {
  const [state, formAction] = useActionState(submitAction, null);

  if (state?.success) {
    return (
      <p className="bg-rainbow bg-clip-text text-transparent tracking-wider font-bangers mt-10 text-3xl">
        Thanks! We'll keep you posted!
      </p>
    );
  }

  return (
    <>
      <form
        className="flex-col mx-auto mt-10 flex max-w-md gap-4 w-full sm:flex-row"
        action={formAction}
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Notify me
        </button>
      </form>

      {state?.error && (
        <p className="text-red-600 mt-4 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </>
  );
};
