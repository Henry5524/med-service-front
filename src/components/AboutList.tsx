import { AboutListProps } from "@/types/aboutTypes";

export default function AboutList({ title, description }: AboutListProps) {
  return (
    <div className="mb-4">
      <h4 className="text-gray-900 text-lg font-medium mb-2">{title}</h4>
      <p className="text-gray-900 text-base font-normal">{description}</p>
    </div>
  );
}
