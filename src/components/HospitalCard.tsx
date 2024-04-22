import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { sanitizeHtml } from "@/utils/sanitizer";
import truncateWithLink from "@/utils/truncateWithLink";
import { LocationIcon } from "@/assets/icons";

export interface HospitalCardProps {
  id: number;
  name: string;
  address: string;
  description: string;
  imgSrc: string;
}

export default function HospitalCard({
  id,
  name,
  address,
  description,
  imgSrc,
}: HospitalCardProps) {
  return (
    <Card
      isBlurred
      className="border-none m-auto w-[360px] xs:w-full xs:max-w-[910px] text-gray-900 mb-4 drop-shadow-lg"
      shadow="sm"
    >
      <CardBody>
        <div className="flex gap-4 flex-col items-center justify-center xs:flex-row">
          <div className="flex flex-col w-fit gap-4">
            {imgSrc ? (
              <Image
                alt="Album cover"
                className="object-cover"
                width={300}
                height={200}
                src={imgSrc}
                isZoomed
              />
            ) : (
              <Image
                alt="Album cover"
                className="object-cover"
                width={300}
                height={200}
                src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                isZoomed
              />
            )}
          </div>

          <div className="flex flex-col w-fit gap-2">
            <h2 className="text-sm lg:text-xl font-medium text-gray-900">
              {name}
            </h2>
            <span className="flex gap-1 items-center">
              <LocationIcon />
              <p className="text-xs lg:text-sm text-gray-500 font-light mt-[2px]">
                {address}
              </p>
            </span>

            <h4
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  truncateWithLink(description, 20, `/home/${id}`),
                ),
              }}
              className="text-xs lg:text-base text-gray-800 font-normal"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
