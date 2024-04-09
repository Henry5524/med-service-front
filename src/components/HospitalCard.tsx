import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function HospitalCard() {
  const router = useRouter();

  return (
    <Card
      isBlurred
      className="border-none m-auto w-[360px] xs:w-full xs:max-w-[910px] text-gray-900 mb-4 drop-shadow-lg "
      shadow="sm"
    >
      <CardBody>
        <div className="flex gap-4 flex-col items-center justify-center xs:flex-row ">
          <div className="flex flex-col w-fit gap-4">
            <Image
              alt="Album cover"
              className="object-cover"
              width={300}
              height={200}
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
              isZoomed
            />
          </div>

          <div className="flex flex-col w-fit gap-2 ">
            <h2 className="text-sm lg:text-xl font-medium text-gray-900">
              КЛИНИКА МЕМОРИАЛ БАХЧЕЛИЭВЛЕР (MEMORIAL BAHÇELIEVLER HOSPITAL)
            </h2>
            <p className="text-xs lg:text-sm text-gray-500 font-light">
              ТУРЦИЯ, СТАМБУЛ
            </p>
            <h4 className="text-xs lg:text-base text-gray-800 font-normal">
              Лечение онкологии, центр трансплантации. Успешность трансплантации
              почек - 99% ,{" "}
              <Link href={"/home/2"} className="underline">
                подробнее...
              </Link>
            </h4>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
