'use client';

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function LoginForm () {

  const [ errorMessage, dispatch ] = useFormState(authenticate, undefined);

  return(
    <div className="flex flex-col w-7/12 justify-center">

      <form action={dispatch} className="flex flex-col">

        <h1 className="text-start text-4xl font-semibold mb-1">Login</h1>

        <h2 className="text-start text-md font-extralight mb-6 opacity-65">Enter your login details please.</h2>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Email"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Password"/>

        <div className="items-top flex space-x-2 mb-2">

          <Checkbox className="bg-slate-200 border-none mb-4" id="logged-in" />

          <div className="flex gap-1.5 leading-none w-11/12 justify-between">
            <label htmlFor="logged-in" className="text-sm font-light leading-none">Keep me logged in</label>
            <Link href="/">
              <p className="text-sm font-light leading-none text-end mr-6 hover:text-blue-500">Forgot password?</p>
            </Link>
          </div>

        </div>

        <LoginButton />

        <div>
          {errorMessage && (<p className="text-red-600">{errorMessage}</p>)}
        </div>

      </form>

      <div className="mt-4 w-full flex justify-start">
        <div className="w-11/12 flex justify-start">
          <p className="text-xs mb-2">Don't have an account? <Link href="/signup" className="text-sm hover:text-blue-500">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
}

const LoginButton = () => {

  const { pending } = useFormStatus();

  return(
    <Button aria-disabled={pending} className="w-11/12 bg-blue-700 text-white hover:bg-blue-500 shadow-lg hover:shadow-none" variant="ghost">
      Log me in!
    </Button>
  );
};
