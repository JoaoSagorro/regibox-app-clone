'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

interface NavigationBarProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
  link: string;
}

// TODO: create a subtitle component for the inside of each navigation item.
// TODO: each component must have a title and a link for the specific page

export const NavigationBar = ({
  children,
  title,
  className,
  link,
}: NavigationBarProps) => {
  return(
    <NavigationMenu className={className}>
      <NavigationMenuList className="w-full">

          <NavigationMenuItem className="font-semibold">
            <NavigationMenuTrigger className="text-md">{title}</NavigationMenuTrigger>
            <NavigationMenuContent className="w-24 flex items-center justify-start ml-2">
              <div className="w-[200px]">
                <NavigationMenuLink href={link} className="text-sm">{children}</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};
