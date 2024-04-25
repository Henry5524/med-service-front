import { ImageAttributes, ImageResponse, MappedImages } from "@/types/dataTypes";

export const mapImages = (imagesData: ImageResponse): MappedImages[] => {
  return imagesData?.data?.map((image: { attributes: ImageAttributes }) => {
    return ({ imageUrl: image.attributes.url, name: image.attributes.name })
  })
};

