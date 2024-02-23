import UserSidebar from "./_components/sidebar";

const UserLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return(

    <div className="flex bg-slate-50">
      <UserSidebar></UserSidebar>
      {children}
    </div>

  );
};

export default UserLayout;
