import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "@/assets/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png";
import image2 from "@/assets/bc6b38fd-424d-4a3c-b306-8edf0d5bcb0d.png";
import image3 from "@/assets/fc430996-5c3f-4b8b-b01f-07f3ecdff192.png";
import image4 from "@/assets/7473111b-451f-42b6-9f3f-ad06220c978f.png";

const heroImages = [
  image1,
  image2,
  image3,
  image4
];

export const HeroCarousel = () => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto mb-12">
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[250px]">
              <img
                src={image}
                alt={`صورة ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 z-10" />
      <CarouselNext className="absolute right-2 z-10" />
    </Carousel>
  );
};
