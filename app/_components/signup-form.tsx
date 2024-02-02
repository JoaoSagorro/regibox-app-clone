const SignupForm = () => {
  return(
    <div className="flex flex-col w-7/12 justify-center">

      <form className="flex flex-col ">

        <h1 className="text-start text-4xl font-semibold mb-1">Sign up</h1>

        <h2 className="text-start text-md font-extralight mb-6">Enter your login details please.</h2>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="First Name"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Last Name"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Email"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Password"/>

        <input type="text" className="w-11/12 h-10 mt-2 mb-4 px-2 rounded-lg bg-slate-200 border text-black" placeholder="Retype password"/>

      </form>

      <div className="mt-4 w-full flex justify-start">
        <div className="w-11/12 flex justify-start">

        </div>
      </div>
    </div>
  );
};

export default SignupForm;
