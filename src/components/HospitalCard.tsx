import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { useRouter } from "next/router";

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
          <div className="relative">
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
            <h2 className="text-sm lg:text-xl font-medium">
              КЛИНИКА МЕМОРИАЛ БАХЧЕЛИЭВЛЕР (MEMORIAL BAHÇELIEVLER HOSPITAL)
            </h2>
            <p className="text-xs lg:text-sm text-gray-500 font-light">
              ТУРЦИЯ, СТАМБУЛ
            </p>
            <h4 className="text-xs lg:text-base text-gray-800 font-normal">
              Лечение онкологии, центр трансплантации. Успешность трансплантации
              почек - 99% , печени — 93,5% . 320 коек, 15. Лечение онкологии,
              центр трансплантации...
            </h4>
            {/* <Button
              size="md"
              className="max-w-[210px] m-auto bg-gradient-to-r to-cyan-500 from-blue-500 text-white border-white-500"
              variant="bordered"
              onClick={() => router.push(`/home/2`)}
            >
              HeartIcon
            </Button> */}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
