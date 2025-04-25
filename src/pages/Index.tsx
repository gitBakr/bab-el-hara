import { MenuItem } from "@/components/MenuItem";
import { ChefHat } from "lucide-react";
import { HeroImage } from "@/components/HeroCarousel";
import { Categories } from "@/components/Categories";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [filteredCategory, setFilteredCategory] = useState("all");

  const menuItems = [
    {
      name: "مندي لحم تقليدي",
      description: "لحم ضأن طري مطهو على الطريقة التقليدية مع الأرز البسمتي المعطر والمكسرات",
      price: 45,
      image: "https://i.ibb.co/fzm1WMx0/s-mechouia.jpg",
      category: "main"
    },
    {
      name: "بيتزا تونسية خاصة",
      description: "عجينة محضرة يدويًا مع صلصة طماطم وجبن وخضروات طازجة",
      price: 28,
      image: "https://i.ibb.co/JjGdJF9P/dessert1.jpg",
      category: "main"
    },
    {
      name: "شاورما دجاج",
      description: "شاورما دجاج طازجة مع صلصة الثوم والخضروات",
      price: 12,
      image: "https://i.ibb.co/1JhD0xdY/Whats-App-Image-2025-04-24-19-50-07-dca18170.jpg",
      category: "sandwiches"
    },
    {
      name: "كنافة بالجبنة",
      description: "حلوى شرقية تقليدية محشوة بالجبنة والقشطة",
      price: 15,
      image: "https://i.ibb.co/4nT0b16Z/Whats-App-Image-2025-04-24-19-50-07-fe44554b.jpg",
      category: "desserts"
    },
    {
      name: "قهوة تونسية",
      description: "قهوة تونسية تقليدية محضرة على الرمل",
      price: 5,
      image: "https://i.ibb.co/fzm1WMx0/s-mechouia.jpg",
      category: "drinks"
    },
    {
      name: "طبق كسكسي",
      description: "كسكسي تقليدي مع لحم الضأن والخضروات الموسمية",
      price: 35,
      image: "https://i.ibb.co/JjGdJF9P/dessert1.jpg",
      category: "main"
    },
    {
      name: "سندويش تونسي",
      description: "خبز باقيت محشو بالتونة والبيض والزيتون",
      price: 8,
      image: "https://i.ibb.co/1JhD0xdY/Whats-App-Image-2025-04-24-19-50-07-dca18170.jpg",
      category: "sandwiches"
    },
    {
      name: "بقلاوة",
      description: "حلوى شرقية بالمكسرات والعسل",
      price: 10,
      image: "https://i.ibb.co/4nT0b16Z/Whats-App-Image-2025-04-24-19-50-07-fe44554b.jpg",
      category: "desserts"
    }
  ];

  const filteredItems = filteredCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === filteredCategory);

  return (
    <div className="min-h-screen bg-secondary-foreground" dir="rtl">
      <header className="bg-primary py-8 text-center">
        <div className="container mx-auto">
          <ChefHat className="h-16 w-16 mx-auto mb-4 text-primary-foreground" />
          <h1 className="text-4xl font-bold text-primary-foreground mb-2 font-arabic">
            مطعم باب الحارة
          </h1>
          <p className="text-xl text-primary-foreground/90 font-arabic">
            أشهى المأكولات التونسية التقليدية في تطاوين
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <HeroImage />
        <Categories onCategoryChange={setFilteredCategory} />
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground font-arabic">
          قائمة الطعام
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
