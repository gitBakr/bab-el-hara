
import { MenuItem } from "@/components/MenuItem";
import { ChefHat } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Categories } from "@/components/Categories";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const menuItems = [
    {
      name: "مندي لحم تقليدي",
      description: "لحم ضأن طري مطهو على الطريقة التقليدية مع الأرز البسمتي المعطر والمكسرات",
      price: 45,
      image: "public/lovable-uploads/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png"
    },
    {
      name: "بيتزا تونسية خاصة",
      description: "عجينة محضرة يدويًا مع صلصة طماطم وجبن وخضروات طازجة",
      price: 28,
      image: "public/lovable-uploads/bc6b38fd-424d-4a3c-b306-8edf0d5bcb0d.png"
    },
    {
      name: "مندي دجاج محشي",
      description: "دجاج كامل محشي بالأرز والمكسرات مع البهارات التونسية الخاصة",
      price: 35,
      image: "public/lovable-uploads/fc430996-5c3f-4b8b-b01f-07f3ecdff192.png"
    },
    {
      name: "طبق المكسرات الخاص",
      description: "تشكيلة فاخرة من المكسرات المحمصة مع العسل الطبيعي",
      price: 20,
      image: "public/lovable-uploads/7473111b-451f-42b6-9f3f-ad06220c978f.png"
    }
  ];

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
        <HeroCarousel />
        <Categories />
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground font-arabic">
          قائمة الطعام
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </main>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
