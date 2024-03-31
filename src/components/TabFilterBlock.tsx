import classnames from "classnames";
import { useEffect, useState } from "react";

export interface TabFilterBlockProps {
  selectedId?: string | null;
  postsData?: any;
  onSelectionChange?: (activeItem: any) => void;
}

export default function TabFilterBlock({
  selectedId,
  postsData,
  onSelectionChange,
}: TabFilterBlockProps) {
  const [activeId, setActiveId] = useState<string | any>(selectedId);

  function handleActiveChange(activeItem: any) {
    setActiveId(activeItem?.id);

    onSelectionChange?.(activeItem);
  }

  useEffect(() => {
    if (selectedId === undefined && postsData?.length) {
      setActiveId(postsData[0]?.id);
    }
  }, [postsData, selectedId]);

  const postsDataTest = [
    {
      id: "1",
      name: "All posts",
      number: "15",
    },
    {
      id: "2",
      name: "Platform updates",
      number: "2",
    },
    {
      id: "3",
      name: "Content changes",
      number: "8",
    },
    {
      id: "4",
      name: "Competitions",
      number: "9",
    },
    {
      id: "5",
      name: "Upcoming webinar",
      number: "12",
    },
    {
      id: "6",
      name: "Upcoming webinars",
      number: "11",
    },
    {
      id: "7",
      name: "General updates",
      number: "3",
    },
  ];

  return (
    <div
      className={classnames(
        "p-6 pb-2 rounded-xl w-[360px] xs:w-full md:max-w-80 bg-white drop-shadow-md flex-[9_1_auto] m-auto mt-0 mb-8",
      )}
    >
      {postsDataTest?.map((item: any) => (
        <div
          key={item.id}
          onClick={() => {
            handleActiveChange(item);
          }}
        >
          <div
            className={`${
              activeId === item.id ? " font-extrabold" : "font-normal "
            } flex items-center text-base leading-6 text-gray-900 mb-4 cursor-pointer`}
          >
            {item.name}
            <span className="px-2 py-1 font-medium text-sm leading-5 text-brand-blue bg-brand-light-purple rounded-md ml-1">
              ({item.number})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
