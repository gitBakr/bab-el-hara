
import { Phone, MapPin, Clock } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-primary-foreground" dir="rtl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 font-arabic">تواصل معنا</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+216 00 000 000</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>تطاوين، تونس</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 font-arabic">ساعات العمل</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              <span>الأحد - الخميس: 10 صباحًا - 11 مساءً</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              <span>الجمعة والسبت: 10 صباحًا - 12 صباحًا</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 font-arabic">روابط سريعة</h3>
          <div className="space-y-2">
            <a href="#" className="block hover:text-secondary-foreground">الرئيسية</a>
            <a href="#" className="block hover:text-secondary-foreground">القائمة</a>
            <a href="#" className="block hover:text-secondary-foreground">الطلبات</a>
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-primary-foreground/20" />

      <div className="text-center text-sm">
        <p className="font-arabic">© {new Date().getFullYear()} مطعم باب الحارة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};
