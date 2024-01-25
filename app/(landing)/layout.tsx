export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <div className="h-full w-full flex items-center justify-between">
      {children}
    </div>
  );
};
