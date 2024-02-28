import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const CoachAvatarComponent = () => {
  return(
    <Avatar className="border-4 border-white">
      <AvatarImage
        src="https://activeyewear.com/cdn/shop/products/rich-froning-signature-series_800x.jpg?v=1638424177"
      />
    </Avatar>
  );
};
