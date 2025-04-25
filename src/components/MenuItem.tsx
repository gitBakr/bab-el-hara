import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col items-center text-center" dir="rtl">
      <h3 className="text-xl font-bold text-primary-foreground mb-3 font-arabic">{name}</h3>
      <div className="w-48 h-48 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-gray-600 text-sm mb-3 font-arabic">{description}</p>
      <div className="w-full flex flex-col gap-2">
        <span className="text-xl font-bold text-primary-foreground font-arabic">
          {price} د.ت
        </span>
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-arabic"
          variant="default"
        >
          أضف إلى السلة
        </Button>
      </div>
    </div>
  );
};
