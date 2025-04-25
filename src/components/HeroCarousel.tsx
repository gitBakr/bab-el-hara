import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const heroImages = [
  "/lovable-uploads/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png",
  "/lovable-uploads/7473111b-451f-42b6-9f3f-ad06220c978f.png",
  "/lovable-uploads/bc6b38fd-424d-4a3c-b306-8edf0d5bcb0d.png"
];

export const HeroCarousel = () => {
  return (
    <Carousel 
      className="w-full max-w-5xl mx-auto mb-12 relative"
      opts={{
        align: "start",
        loop: true,
        skipSnaps: false,
        dragFree: false
      }}
    >
      <CarouselContent className="-ml-1">
        {heroImages.map((image, index) => (
          <CarouselItem key={index} className="pl-1 basis-full">
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
      <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
        <CarouselPrevious className="pointer-events-auto" />
        <CarouselNext className="pointer-events-auto" />
      </div>
    </Carousel>
  );
};

const HeroImage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="relative h-[250px]">
        <img
          src="/lovable-uploads/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png"
          alt="صورة المطعم"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export { HeroImage };
