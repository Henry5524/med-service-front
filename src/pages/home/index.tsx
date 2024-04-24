import { useEffect, useState } from "react";
import HospitalCard from "@/components/HospitalCard";
import TabFilterBlock from "@/components/TabFilterBlock";
import { FilterTabsData } from "@/helpers/FilterTabsData";
// import { ClinicsData } from "@/helpers/ClinicsData";
import { Api } from "@/services/api";
import { mapper } from "@/lib/map-clinics";

export default function Home() {
  const [activeId, setActiveId] = useState<string>();
  const [clinicsData, setClinicsData] = useState<any>();
  const [hydrated, setHydrated] = useState<boolean>(false);

  function handleActiveChange(activeItem: any) {
    setActiveId(activeItem);
  }

  async function getTickets(): Promise<void> {
    const res = await Api.getClinics();
    setClinicsData(res);
  }

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    getTickets();
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
      {/* <div className="flex-[9_1_auto]">
        {ClinicsData.map((item: any) => (
          <HospitalCard
            key={item.id}
            id={item.id}
            name={item.name}
            address={item.address}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        ))}
      </div> */}
      <div className="flex-[9_1_auto]">
        {mapper(clinicsData)?.map((item: any) => (
          <HospitalCard
            key={item.id}
            id={item.id}
            name={item?.name}
            address={item?.address}
            description={item.description}
            imgSrc={item.image}
          />
        ))}
      </div>
    </div>
  );
}
