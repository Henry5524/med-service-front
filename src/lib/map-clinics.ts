import { DataAttributes, ImageResponse, Service } from "@/types/dataTypes";

interface InputData {
  data: { id: number; attributes: DataAttributes }[];
}

interface OutputData {
  id: number;
  name: string;
  description: string;
  services: Service[];
  image: ImageResponse;
}

export const mapClinics = (inputData: InputData): OutputData[] => {
  return inputData.data.map((item) => {
    return ({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      services: item.attributes.services.data,
      image: item.attributes.image
    })
  });
};

