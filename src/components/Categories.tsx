import { Button } from "@/components/ui/button";
import { Sandwich, CakeSlice, Coffee, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    id: "all",
    name: "الكل",
    icon: <UtensilsCrossed className="h-6 w-6" />,
  },
  {
    id: "main",
    name: "أطباق رئيسية",
    icon: <img src="/lovable-uploads/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png" className="h-6 w-6 object-cover rounded" />,
  },
  {
    id: "sandwiches",
    name: "ساندويتشات",
    icon: <Sandwich className="h-6 w-6" />,
  },
  {
    id: "desserts",
    name: "حلويات",
    icon: <CakeSlice className="h-6 w-6" />,
  },
  {
    id: "drinks",
    name: "مشروبات",
    icon: <Coffee className="h-6 w-6" />,
  }
];

interface CategoriesProps {
  onCategoryChange: (category: string) => void;
}

export const Categories = ({ onCategoryChange }: CategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={`flex items-center gap-2 text-lg font-arabic transition-all ${
            selectedCategory === category.id 
              ? "bg-primary text-primary-foreground scale-105" 
              : "hover:bg-primary/10"
          }`}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.icon}
          {category.name}
        </Button>
      ))}
    </div>
  );
};
