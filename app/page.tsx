import Image from "next/image";
import logoImage from "../public/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-full">
      <div className="max-w-xl">
        <Image
          id="logo"
          src={logoImage}
          alt="Arizona Pride Riders logo"
          className=" mb-16"
        />
      </div>

      <ul className="flex flex-col items-center justify-center gap-5 font-bangers">
        <li>
          <a
            href="https://www.facebook.com/groups/arizonaprideriders"
            className="bg-white text-transparent bg-clip-text border-b-2 text-3xl tracking-wide hover:bg-rainbow"
          >
            Join us on Facebook
          </a>
        </li>
      </ul>

      <div className="text-white max-w-2xl text-balance text-center space-y-4 mt-10">
        <p className="text-xl">
          We used to be on Meetup, but due to their recent price increases, we
          have decided to close our Meetup group. For those who do not use
          Facebook, we are investigating other options.
        </p>
        <p className="text-lg">
          If you would like to keep in touch with us in the meantime, you can
          sign up here for email updates:
        </p>
      </div>

      <form className="mx-auto mt-10 flex max-w-md gap-x-4 w-full">
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
    </div>
  );
}
