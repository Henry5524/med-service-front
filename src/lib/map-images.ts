import { ImageAttributes, ImageResponse } from "@/types/dataTypes";

export interface MappedImages {
  imageUrl: string;
  name: string;
}

export const mapImages = (imagesData: ImageResponse | any): MappedImages[] => {
  return imagesData?.data?.map((image: { attributes: ImageAttributes }) => {
    return ({ imageUrl: image.attributes.url, name: image.attributes.name })
  })
};

