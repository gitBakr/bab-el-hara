
import { Sandwich, CakeSlice } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  {
    id: "sandwiches",
    name: "ساندويتشات",
    icon: <Sandwich className="h-6 w-6" />,
  },
  {
    id: "main",
    name: "أطباق رئيسية",
    icon: <img src="/lovable-uploads/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png" className="h-6 w-6 object-cover rounded" />,
  },
  {
    id: "desserts",
    name: "حلويات",
    icon: <CakeSlice className="h-6 w-6" />,
  },
];

export const Categories = () => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          className="flex items-center gap-2 text-lg font-arabic"
        >
          {category.icon}
          {category.name}
        </Button>
      ))}
    </div>
  );
};
