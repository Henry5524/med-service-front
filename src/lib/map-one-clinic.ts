import { DataAttributes } from "@/types/dataTypes";
import { MappedImages, mapImages } from "./map-images";
import { MappedServices, mapServices } from "./map-services";

interface InputData {
  data: { id: number; attributes: DataAttributes };
}

interface OutputData {
  id: number;
  name: string;
  description: string;
  services: MappedServices[];
  image: MappedImages[];
}

export const mapOneClinic = (inputData: InputData | any): OutputData => {
  return ({
    id: inputData?.data?.id,
    name: inputData?.data?.attributes.name,
    description: inputData?.data?.attributes.description,
    services: mapServices(inputData?.data?.attributes.services),
    image: mapImages(inputData?.data?.attributes.image)
  })
}