import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import { Api } from "@/services";
import AboutTable from "@/components/AboutTable";
import AboutCard from "@/components/AboutCard";
import AboutList from "@/components/AboutList";
import { mapAboutPageData } from "@/lib";
import { AboutListProps } from "@/types/aboutTypes";

export default function About() {
  const [data, setData] = useState<any>();

  const aboutPageData = mapAboutPageData(data);

  useEffect(() => {
    async function fetchData() {
      const res = await Api.getAboutPageData();
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="md:flex gap-4">
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg mb-4">
        <div>
          <h1 className="text-gray-900 text-4xl font-bold mb-4">
            {aboutPageData.header}
          </h1>
          <h2 className="text-gray-900 text-xl font-medium mb-2">
            {aboutPageData.title}
          </h2>
          <p className="text-gray-900 text-normal font-normal mb-2">
            {aboutPageData.description}
          </p>
        </div>

        <Divider />

        <div>
          <h2 className="text-gray-900 text-2xl font-semibold mb-4">Кто мы?</h2>

          {aboutPageData.aboutLists?.map(
            ({ id, title, description }: AboutListProps) => (
              <AboutList key={id} title={title} description={description} />
            ),
          )}
        </div>

        <Divider />

        <AboutTable data={aboutPageData.aboutTableData} />
      </div>

      <div className="sm:flex sm:flex-col md:block gap-4">
        {aboutPageData.aboutCards?.map(({ id, icon, title, subTitle }) => (
          <AboutCard key={id} icon={icon} title={title} subTitle={subTitle} />
        ))}
      </div>
    </div>
  );
}
