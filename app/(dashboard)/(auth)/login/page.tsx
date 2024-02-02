import { authenticate } from "@/lib/action";

import LoginForm from "@/app/_components/login-form";


const LoginPage = () => {
  return(
    <>

      <div className="w-6/12 h-full flex flex-col items-center justify-center border-2 border-black">

        <LoginForm />

      </div>

    </>
  );
};

export default LoginPage;
