import Image from "next/image";
import logoImage from "../public/logo.png";
import { EmailSignupForm } from "@/app/components/EmailSignupForm";

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

      <div className="text-white max-w-3xl text-balance text-center space-y-4 mt-10">
        <p className="text-xl">
          We used to have a private group on Meetup, but due to their recent{" "}
          <span className="text-nowrap">
            <span className="font-bold bg-red-600 px-1">65%</span> price
            increase
          </span>
          , we unfortunately have decided to close it. For those who do not use
          Facebook, we are investigating alternative options.
        </p>
        <p className="text-lg">
          If you would like to keep in touch with us in the meantime, you can
          sign up here for email updates:
        </p>
      </div>

      <EmailSignupForm />
    </div>
  );
}
