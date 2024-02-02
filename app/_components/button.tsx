'use client';

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const ButtonComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const { pending } = useFormStatus();

  return(
    <Button aria-disabled={pending} className="w-11/12 bg-blue-700 text-white hover:bg-blue-500 shadow-lg hover:shadow-none" variant="ghost">
      {children}
    </Button>
  );
};

export default ButtonComponent;
