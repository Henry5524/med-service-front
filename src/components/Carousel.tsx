import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { Button, Image } from "@nextui-org/react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel() {
  return (
    <ResponsiveCarousel
      infiniteLoop={true}
      autoPlay={true}
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
      <Image
        alt="Album cover"
        className="object-cover aspect-[3/2]"
        width={"100%"}
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
      />
      <Image
        alt="Album cover"
        className="object-cover aspect-[3/2] "
        width={"100%"}
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
      />
    </ResponsiveCarousel>
  );
}
