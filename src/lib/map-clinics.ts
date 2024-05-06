import { DataAttributes } from "@/types/dataTypes";
import { MappedServices, mapServices } from "./map-services";
import { MappedImages, mapImages } from "./map-images";

export interface InputData {
  data: { id: number; attributes: DataAttributes }[];
}

export interface MappedClinics {
  id: number;
  name: string;
  description: string;
  address?: string;
  services: MappedServices[];
  image: MappedImages[];
}

export const mapClinics = (inputData: InputData | any): MappedClinics[] => {
  return inputData.data.map((item: any) => {
    return ({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      address: item.attributes.address,
      services: mapServices(item.attributes.services),
      image: mapImages(item.attributes.image)
    })
  });
};


