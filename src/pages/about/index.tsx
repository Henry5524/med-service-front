import { Divider } from "@nextui-org/react";
import AboutTable from "@/components/AboutTable";
import AboutCard, { AboutCardProps } from "@/components/AboutCard";
import AboutList, { AboutListProps } from "@/components/AboutList";
import { AboutCardsData, AboutListsData } from "@/helpers/About";

export default function About() {
  return (
    <div className="md:flex gap-4">
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg mb-4">
        <div>
          <h1 className="text-gray-900 text-4xl font-bold mb-4">
            World-class clinical care, teaching and research
          </h1>
          <h3 className="text-gray-900 text-xl font-medium mb-2">
            MQ Health is Australia's first fully integrated academic health
            sciences centre.
          </h3>
          <p className="text-gray-900 text-normal font-normal mb-2">
            We combine excellence in clinical care with teaching and research to
            enhance patient outcomes and improve lives. Researchers also benefit
            from our unique model because they can see the immediate effects of
            their research on patients.
          </p>
        </div>

        <Divider />

        <div>
          <h1 className="text-gray-900 text-2xl font-semibold mb-4">
            Who we are
          </h1>
          {AboutListsData.map(({ title, description }: AboutListProps) => (
            <AboutList
              key={`${title} - ${description}`}
              title={title}
              description={description}
            />
          ))}
        </div>

        <Divider />

        <AboutTable />
      </div>

      <div className="sm:flex md:block gap-4">
        {AboutCardsData.map(({ title, description, icon }: AboutCardProps) => (
          <AboutCard
            key={`${title} - ${description}`}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
