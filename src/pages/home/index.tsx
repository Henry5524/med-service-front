import HospitalCard from "@/components/HospitalCard";
import TabFilterBlock from "@/components/TabFilterBlock";
import React from "react";

export default function Home() {
  return (
    <div className="lg:flex gap-8 items-start">
      <TabFilterBlock />
      <div className="flex-[9_1_auto]">
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
      </div>
    </div>
  );
}
