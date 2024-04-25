import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { config } from "../config";
import { sanitizeHtml } from "@/utils/sanitizer";
import truncateWithLink from "@/utils/truncateWithLink";
import { LocationIcon } from "@/assets/icons";
import { MappedImages } from "@/types/dataTypes";

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
  return (
    <Card
      isBlurred
      className="border-none m-auto w-[360px] xs:w-full xs:max-w-[910px] text-gray-900 mb-4 drop-shadow-lg"
      shadow="sm"
    >
      <CardBody>
        <div className="flex gap-4 flex-col items-center xs:flex-row ">
          <div className="custom-image-container">
            {imgSrc ? (
              <img
                src={`${config.api_url_image}${imgSrc[0].imageUrl}`}
                className="custom-image"
                alt={`${config.api_url_image}${imgSrc[0].name}`}
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
                  truncateWithLink(description, 20, `/clinics/${id}`),
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
