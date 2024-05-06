import { useEffect, useMemo, useState } from "react";
import { Api } from "@/services/api";
import { MappedClinics, MappedServices, mapClinics, mapServices } from "@/lib";
import HospitalCard from "@/components/HospitalCard";
import TabFilterBlock from "@/components/TabFilterBlock";

export default function Clinics() {
  const [activeId, setActiveId] = useState<string | number>("all");
  const [parentId, setParentId] = useState<string | number | undefined>();
  const [clinicsData, setClinicsData] = useState<any>();
  const [servicesData, setServicesData] = useState<any>();
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const clinicsRes = await Api.getClinics();
      const servicesRes = await Api.getServices();
      setClinicsData(clinicsRes);
      setServicesData(servicesRes);
      setHydrated(true);
    }
    fetchData();
  }, []);

  const filteredClinics = useMemo(() => {
    if (!hydrated) return null;

    const mappedClinics = mapClinics(clinicsData);

    return activeId !== "all"
      ? mappedClinics.filter((clinic: MappedClinics) =>
          clinic.services.some(
            (service: MappedServices) =>
              service.id === parentId || service.id === activeId,
          ),
        )
      : mappedClinics;
  }, [activeId, clinicsData, parentId, hydrated, servicesData]);

  function handleActiveIdChange(
    id: string | number,
    parentId?: string | number,
  ) {
    setActiveId(id);
    setParentId(parentId);
  }

  return (
    <div className="lg:flex gap-8 items-start">
      <TabFilterBlock
        activeId={activeId}
        setActiveId={setActiveId}
        tabsData={mapServices(servicesData)?.filter(
          (item: MappedServices) => item.top === true,
        )}
        onSelectionChange={handleActiveIdChange}
      />
      <div className="flex-[9_1_auto]">
        {filteredClinics?.map((item: MappedClinics) => (
          <HospitalCard
            key={item.id}
            id={item.id}
            name={item.name}
            address={item?.address}
            description={item.description}
            imgSrc={item.image}
          />
        ))}
      </div>
    </div>
  );
}
