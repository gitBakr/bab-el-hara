import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroImages = [
  "/lovable-uploads/haneth-plat.jpg",
  "/lovable-uploads/pizza-special.jpg",
  "/lovable-uploads/37d51d1a-e507-4611-a68a-3a7345fe2ef8.png",
  "/lovable-uploads/bc6b38fd-424d-4a3c-b306-8edf0d5bcb0d.png"
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
