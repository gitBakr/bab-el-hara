
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const phoneNumber = "+21600000000"; // Replace with actual phone number

  return (
    <Button
      onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")}
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 rounded-full h-16 w-16 p-0 shadow-lg"
    >
      <Phone className="h-8 w-8 text-white" />
    </Button>
  );
};
