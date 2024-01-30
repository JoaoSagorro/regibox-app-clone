const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return(
    <div className="border-2 border-black flex items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
};


export default AuthLayout;
