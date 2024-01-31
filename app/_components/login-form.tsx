'use client';

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/action";
import { Button } from "@/components/ui/button";

export default function LoginForm () {

  const [ errorMessage, dispatch ] = useFormState(authenticate, undefined);

  return(
    <div className="border-2 border-black flex flex-col">

      <form action={dispatch} className="flex flex-col border-2 border-black">
        <h1 className="text-center text-white">Login</h1>

        <input type="text" />

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
    <Button aria-disabled={pending}>
      Log me in!
    </Button>
  );
};
