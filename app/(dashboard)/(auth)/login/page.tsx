import { authenticate } from "@/lib/action";

import LoginForm from "@/app/_components/login-form";


const LoginPage = () => {
  return(
    <>

          <div className="w-8/12 h-full flex items-center justify-center">
            
            <LoginForm />

          </div>
    </>
  );
};

export default LoginPage;
