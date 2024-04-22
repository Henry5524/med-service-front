import { useEffect } from "react";

export interface TabFilterBlockProps {
  activeId?: string;
  setActiveId: (activeId: string) => void;
  selectedId?: string;
  postsData?: any;
  onSelectionChange?: any;
}

export default function TabFilterBlock({
  activeId,
  setActiveId,
  selectedId,
  postsData,
  onSelectionChange,
}: TabFilterBlockProps) {
  useEffect(() => {
    if (selectedId === undefined && postsData?.length) {
      setActiveId(postsData[0]?.id);
    }
  }, [postsData, selectedId]);

  return (
    <div
      className={
        "p-6 pb-2 rounded-xl w-[360px] xs:w-full md:max-w-80 bg-white drop-shadow-md flex-[9_1_auto] m-auto mt-0 mb-8"
      }
    >
      <h1 className="text-gray-900 text-xl font-bold text-center mb-4">
        КЛИНИК ПО ДАННОМУ НАПРАВЛЕНИЮ
      </h1>

      {postsData?.map((item: any) => (
        <div
          key={item.id}
          onClick={() => {
            onSelectionChange(item.id);
          }}
        >
          <div
            className={`${
              activeId === item.id ? " font-extrabold" : "font-normal "
            } flex items-center text-base leading-6 text-gray-900 mb-4 cursor-pointer`}
          >
            {item.name}
            <span
              className={`${
                activeId === item.id ? " font-extrabold" : "font-normal "
              } text-gray-900 ml-2`}
            >
              ({item.number})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
