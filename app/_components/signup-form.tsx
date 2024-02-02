'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useFormStatus } from "react-dom";


const SignupForm = () => {
  return(
    <div className="flex flex-col w-7/12 justify-center">

      <form className="flex flex-col ">

        <h1 className="text-start text-4xl font-semibold mb-1">Sign up</h1>

        <h2 className="text-start text-sm font-extralight mb-4 opacity-65">It only takes you few seconds to create your account</h2>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="First Name"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Last Name"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Email"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Password"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Retype password"/>


        <div className="flex justify-between mb-4">
          <Checkbox className="bg-slate-200 border-none mb-4" id="logged-in" />

          <div className="flex gap-1.5 leading-none w-11/12 justify-between">
            <label htmlFor="logged-in" className="text-sm font-light leading-none">
              I agree to the
              <Link href="/" className="text-sm font-light leading-none text-end mr-6 hover:text-blue-500">
                Terms of Service & Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        <SignupButton />

      </form>


    </div>
  );
};

export default SignupForm;

const SignupButton = () => {

  const { pending } = useFormStatus();

  return(
    <Button aria-disabled={pending} className="w-11/12 bg-blue-700 text-white hover:bg-blue-500 shadow-lg hover:shadow-none" variant="ghost">
      I'm ready!
    </Button>
  );
};
