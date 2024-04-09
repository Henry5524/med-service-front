import { FooterIcon } from "flowbite-react";

export interface AboutCardProps {
  icon: any;
  title: string;
  description: string;
}

export default function AboutCard({
  icon,
  title,
  description,
}: AboutCardProps) {
  return (
    <div className="w-56 bg-white flex flex-col items-center p-4 mb-4 rounded-lg m-auto">
      <FooterIcon icon={icon} />

      <h4 className="text-center text-gray-900 text-lg font-semibold my-2">
        {title}
      </h4>
      <p className="text-center text-gray-900 text-base font-normal">
        {description}
      </p>
    </div>
  );
}
