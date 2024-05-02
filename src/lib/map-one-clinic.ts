import { DataAttributes, ImageResponse, ServiceResponse } from "@/types/dataTypes";

interface InputData {
  data: { id: number; attributes: DataAttributes };
}

interface OutputData {
  name: string;
  description: string;
  services: ServiceResponse;
  image: ImageResponse;
}

export const mapOneClinic = (inputData: InputData | any): OutputData => {
  return ({
    name: inputData?.data?.attributes.name,
    description: inputData?.data?.attributes.description,
    services: inputData?.data?.attributes.services,
    image: inputData?.data?.attributes.image
  })
}