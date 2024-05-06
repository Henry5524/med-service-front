import { MappedServices } from "@/lib";

export interface TabFilterBlockProps {
  activeId?: string | number;
  setActiveId: (activeId: string | number) => void;
  tabsData?: MappedServices[];
  onSelectionChange?: any;
}

export default function TabFilterBlock({
  activeId,
  setActiveId,
  tabsData,
  onSelectionChange,
}: TabFilterBlockProps) {
  return (
    <div
      className={
        "p-6 pb-2 rounded-xl w-[360px] xs:w-full md:max-w-80 bg-white drop-shadow-md flex-[9_1_auto] m-auto mt-0 mb-8"
      }
    >
      <h1 className="text-gray-900 text-xl font-bold text-center mb-4">
        КЛИНИК ПО ДАННОМУ НАПРАВЛЕНИЮ
      </h1>

      <div
        className={`${
          activeId === "all" ? " font-extrabold" : "font-normal "
        } flex items-center text-base leading-6 text-gray-900 mb-4 cursor-pointer`}
        onClick={() => setActiveId("all")}
      >
        Все направления
      </div>

      {tabsData?.map((item: any) => (
        <div
          key={item.id}
          onClick={() => onSelectionChange(item.id, item.parent[0].id)}
        >
          <div
            className={`${
              activeId === item.id ? " font-extrabold" : "font-normal "
            } flex items-center text-base leading-6 text-gray-900 mb-4 cursor-pointer`}
          >
            {item.serviceName}
            {/* <span
              className={`${
                activeId === item.id ? " font-extrabold" : "font-normal "
              } text-gray-900 ml-2`}
            >
              ({number})
            </span> */}
          </div>
        </div>
      ))}
    </div>
  );
}
