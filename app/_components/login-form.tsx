'use client';

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/action";
import { Button } from "@/components/ui/button";

export default function LoginForm () {

  const [ errorMessage, dispatch ] = useFormState(authenticate, undefined);

  return(
    <div className="border-2 border-black flex flex-col w-7/12 justify-center">

      <form action={dispatch} className="flex flex-col border-2 border-black">

        <h1 className="text-start text-4xl text-white mb-6">Login</h1>

        <input type="text" className="w-6/12 h-10 mb-4 rounded-lg"/>

        <input type="text" className="w-6/12 h-10 mb-4 rounded-lg"/>

        <LoginButton />

        <div>
          {errorMessage && (<p>This only appears if there is an error {errorMessage}</p>)}
        </div>
      </form>

    </div>
  );
}

const LoginButton = () => {

  const { pending } = useFormStatus();

  return(
    <Button aria-disabled={pending} className="w-6/12 bg-blue-700 text-white" variant="ghost">
      Log me in!
    </Button>
  );
};
