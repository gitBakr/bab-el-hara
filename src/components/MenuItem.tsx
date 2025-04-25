import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden" dir="rtl">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary-foreground mb-2 font-arabic">{name}</h3>
        <p className="text-gray-600 mb-4 font-arabic">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary-foreground font-arabic">{price} د.ت</span>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-arabic">
            <ShoppingCart className="ml-2 h-4 w-4" />
            أضف إلى السلة
          </Button>
        </div>
      </div>
    </div>
  );
};
