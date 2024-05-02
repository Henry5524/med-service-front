import { ServiceData } from "@/types/dataTypes";

export interface MappedServices {
  id: number
  serviceName: string
  top: boolean
  parent: MappedServices[]
}

export const mapServices = (inputData: any): MappedServices[] => {
  return inputData?.data?.map((service: ServiceData) => {
    return ({ id: service.id, serviceName: service.attributes.name, top: service.attributes.top, parent: mapServices(service.attributes.parent) })
  })
};

