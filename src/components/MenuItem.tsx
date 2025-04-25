import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import image1 from "../assets/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png";
import image2 from "../assets/bc6b38fd-424d-4a3c-b306-8edf0d5bcb0d.png";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const menuItems = [
  {
    name: "هنيث باللحم",
    description: "أرز بسمتي مع لحم الضأن المشوي والمكسرات",
    price: 25,
    image: image1
  },
  {
    name: "بيتزا خاصة",
    description: "بيتزا محضرة على الطريقة التقليدية",
    price: 18,
    image: image2
  }
];

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
