import SignupForm from "@/app/_components/signup-form";

const SignupPage = () => {
  return(
    <>
      <div className="w-6/12 h-full flex flex-col items-center justify-center border-2 border-black">
        Estás no sítio certo!!!
        <SignupForm/>
      </div>
    </>
  );
};

export default SignupPage;
