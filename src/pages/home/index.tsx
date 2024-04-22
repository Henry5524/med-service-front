import { useState } from "react";
import HospitalCard from "@/components/HospitalCard";
import TabFilterBlock from "@/components/TabFilterBlock";
import { FilterTabsData } from "@/helpers/FilterTabsData";
import { ClinicsData } from "@/helpers/ClinicsData";

export default function Home() {
  const [activeId, setActiveId] = useState<string>();

  function handleActiveChange(activeItem: any) {
    setActiveId(activeItem);
  }

  return (
    <div className="lg:flex gap-8 items-start">
      <TabFilterBlock
        activeId={activeId}
        setActiveId={setActiveId}
        postsData={FilterTabsData}
        onSelectionChange={handleActiveChange}
      />
      <div className="flex-[9_1_auto]">
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
      </div>
    </div>
  );
}
