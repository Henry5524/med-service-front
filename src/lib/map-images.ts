import { ImageAttributes, ImageResponse } from "@/types/dataTypes";

export interface MappedImages {
  imageUrl: string;
  name: string;
}

export const mapImages = (imagesData: ImageResponse | any): MappedImages[] => {
  return imagesData?.data?.map((image: { attributes: ImageAttributes | any }) => {
    return ({ imageUrl: image.attributes.url, name: image.attributes.name })
  })
};

export const mapOneImage = (imageData: ImageResponse | any): MappedImages => {
  return ({ imageUrl: imageData?.data?.attributes?.url, name: imageData?.data?.attributes?.name })
}

