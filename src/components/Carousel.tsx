import { Button, Image } from "@nextui-org/react";
import { MappedImages } from "@/lib";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel({ images }: { images: MappedImages[] }) {
  return (
    <ResponsiveCarousel
      showStatus={false}
      showThumbs={false}
      className="md:w-full lg:w-[768px] mb-8 drop-shadow-md"
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <Button
            isIconOnly
            className=" absolute z-20 top-[45%] left-4 "
            radius="full"
            variant="light"
            title={label}
            onClick={onClickHandler}
          >
            <ArrowLeftIcon />
          </Button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <Button
            isIconOnly
            className="absolute z-20 top-[45%] right-4"
            radius="full"
            variant="light"
            title={label}
            onClick={onClickHandler}
          >
            <ArrowRightIcon />
          </Button>
        )
      }
    >
      {images &&
        images.map((image: MappedImages) => (
          <Image
            key={`${image.imageUrl}-${image.name}`}
            alt={image.name}
            className="object-cover aspect-[3/2]"
            width={"100%"}
            src={image.imageUrl}
          />
        ))}
    </ResponsiveCarousel>
  );
}
