import { useRouter } from "next/router";
import { Card, CardBody } from "@nextui-org/react";
import { MappedImages } from "@/lib";
import { sanitizeHtml } from "@/utils/sanitizer";
import { truncateWithLink } from "@/utils/truncateWithLink";
import { LocationIcon } from "@/assets/icons";

export interface HospitalCardProps {
  id: number;
  name: string;
  address?: string;
  description: string;
  imgSrc: MappedImages[];
}

export default function HospitalCard({
  id,
  name,
  address,
  description,
  imgSrc,
}: HospitalCardProps) {
  const router = useRouter();
  return (
    <Card
      isBlurred
      className="border-none m-auto w-[360px] xs:w-full xs:max-w-[910px] text-gray-900 mb-4 drop-shadow-lg"
      shadow="sm"
    >
      <CardBody>
        <div
          className="flex gap-4 flex-col items-center xs:flex-row cursor-pointer"
          onClick={() => router.push(`/clinics/${id}`)}
        >
          <div className="custom-image-container">
            {imgSrc ? (
              <img
                src={imgSrc[0].imageUrl}
                className="custom-image"
                alt={imgSrc[0].name}
              />
            ) : (
              <img
                src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                className="custom-image"
                alt="No image"
              />
            )}
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <h2
              onClick={(e) => e.stopPropagation()}
              className="text-sm lg:text-xl font-medium text-gray-900 cursor-auto max-w-48"
            >
              {name}
            </h2>
            <span
              onClick={(e) => e.stopPropagation()}
              className="flex gap-1 items-center cursor-auto"
            >
              <LocationIcon />
              <p className="text-xs lg:text-sm text-gray-500 font-light mt-[2px] cursor-auto">
                {address}
              </p>
            </span>

            <h4
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  truncateWithLink(description, 20, `/clinics/${id}`),
                ),
              }}
              onClick={(e) => e.stopPropagation()}
              className="text-xs lg:text-base text-gray-800 font-normal cursor-auto"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
