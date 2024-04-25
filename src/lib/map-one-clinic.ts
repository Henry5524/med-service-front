import { DataAttributes, Service, ImageResponse } from "@/types/dataTypes";

interface InputData {
  data: { id: number; attributes: DataAttributes };
}

interface OutputData {
  name: string;
  description: string;
  services: Service[];
  image: ImageResponse;
}

export const mapOneClinic = (inputData: InputData): OutputData => {
  return ({
    name: inputData?.data.attributes.name,
    description: inputData?.data.attributes.description,
    services: inputData?.data.attributes.services.data,
    image: inputData?.data.attributes.image
  })
}