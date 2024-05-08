import { mapOneImage } from "@/lib";
import { AboutCardProps } from "@/types/aboutTypes";

export default function AboutCard({
  icon: image,
  title,
  subTitle,
}: AboutCardProps) {
  const { imageUrl, name } = mapOneImage(image);

  return (
    <div className="w-56 bg-white flex flex-col items-center p-4 mb-4 rounded-lg m-auto">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      )}

      <h4 className="text-center text-gray-900 text-lg font-semibold my-2">
        {title}
      </h4>
      <p className="text-center text-gray-900 text-base font-normal">
        {subTitle}
      </p>
    </div>
  );
}
