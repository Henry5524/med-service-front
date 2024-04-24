import { DataAttributes, Service, Image } from "@/types/dataTypes";

interface InputData {
  data: { id: number; attributes: DataAttributes }[];
}

interface OutputData {
  id: number;
  name: string;
  description: string;
  services: Service[];
  image: Image[];
}

export const mapper = (inputData: InputData): OutputData[] => {
  return inputData?.data.map((item) => {
    const imageData = item.attributes.image?.data;


    return ({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      services: item.attributes.services.data,
      image: imageData?.map((image: { attributes: Image }) => {
        return ({ image: image.attributes.url, name: image.attributes.name })
      })
    })
  });
};