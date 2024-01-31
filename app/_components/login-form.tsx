'use client';

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/action";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginForm () {

  const [ errorMessage, dispatch ] = useFormState(authenticate, undefined);

  return(
    <div className=" flex flex-col w-7/12 justify-center">

      <form action={dispatch} className="flex flex-col ">

        <h1 className="text-start text-4xl text-white mb-1">Login</h1>

        <h2 className="text-start text-md font-extralight text-white mb-6">Enter your login details please.</h2>

        <input type="text" className="w-6/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-transparent border focus:bg-slate-500/90 text-gray-100" placeholder="Email"/>

        <input type="text" className="w-6/12 h-10 mb-4 px-2 rounded-lg bg-transparent border focus:bg-slate-500/90 text-gray-100" placeholder="Password"/>

        <div className="items-top flex space-x-2">

          <Checkbox className="border-[#e2e8f0] mb-4" id="logged-in" />

          <div className="grid gap-1.5 leading-none">
            <label htmlFor="logged-in" className="text-sm font-light leading-none text-gray-200">Keep me logged in</label>
          </div>

          <div className="grid gap-1.5 leading-none">
            <p>Forgot password?</p>
          </div>

        </div>

        <LoginButton />

        <div>
          {errorMessage && (<p className="text-gray-100">{errorMessage}</p>)}
        </div>

      </form>

    </div>
  );
}

const LoginButton = () => {

  const { pending } = useFormStatus();

  return(
    <Button aria-disabled={pending} className="w-6/12 bg-blue-700 text-white hover:bg-blue-500" variant="ghost">
      Log me in!
    </Button>
  );
};
