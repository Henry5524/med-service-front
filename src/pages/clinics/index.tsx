import { useEffect, useState } from "react";
import HospitalCard from "@/components/HospitalCard";
import TabFilterBlock from "@/components/TabFilterBlock";
import { FilterTabsData } from "@/helpers/FilterTabsData";
import { Api } from "@/services/api";
import { mapClinics, mapImages } from "@/lib";
import { mapServices } from "@/lib/map-services";

export default function Clinics() {
  const [activeId, setActiveId] = useState<string>();
  const [clinicsData, setClinicsData] = useState<any>();
  const [servicesData, setServicesData] = useState<any>();
  const [hydrated, setHydrated] = useState<boolean>(false);

  console.log(servicesData);
  
  console.log(mapServices(servicesData));
  

  function handleActiveChange(activeItem: any) {
    setActiveId(activeItem);
  }

  async function getAllClinics(): Promise<void> {
    const res = await Api.getClinics();
    setClinicsData(res);
  }

  async function getAllServices(): Promise<void> {
    const res = await Api.getServices();
    setServicesData(res);
  }

  useEffect(() => {
    getAllClinics();
    getAllServices();
  }, []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className="lg:flex gap-8 items-start">
      <TabFilterBlock
        activeId={activeId}
        setActiveId={setActiveId}
        postsData={FilterTabsData}
        onSelectionChange={handleActiveChange}
      />
      <div className="flex-[9_1_auto]">
        {clinicsData &&
          mapClinics(clinicsData).map((item: any) => {
            const images = mapImages(item?.image);

            return (
              <HospitalCard
                key={item.id}
                id={item.id}
                name={item?.name}
                address={item?.address}
                description={item.description}
                imgSrc={images}
              />
            );
          })}
      </div>
    </div>
  );
}
