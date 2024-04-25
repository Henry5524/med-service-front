import Carousel from "@/components/Carousel";
import { mapOneClinic } from "@/lib";
import { mapImages } from "@/lib/map-images";
import { Api } from "@/services";
import { sanitizeHtml } from "@/utils/sanitizer";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClinicPage() {
  const [clinicData, setClinicData] = useState<any>();
  const router = useRouter();
  const clinicId = router.query.clinics as string | string[] | undefined;

  const clinic = clinicData && mapOneClinic(clinicData);

  async function getTickets(): Promise<void> {
    if (typeof clinicId === "string") {
      const res = await Api.getClinicById(clinicId);
      setClinicData(res);
    }
  }

  useEffect(() => {
    getTickets();
  }, [clinicId]);

  return (
    <div>
      {clinicData && (
        <div>
          <h1 className="text-black text-4xl font-bold tracking-normal text-left mb-8">
            {clinic.name}
          </h1>
          <div className="mb-8 lg:flex gap-8">
            <div className="mb-8">
              {clinicData?.data.attributes.image.data !== null ? (
                <Carousel
                  images={mapImages(clinicData?.data.attributes.image)}
                />
              ) : (
                <img
                  src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                  className="md:w-full lg:w-[768px] lg:h-[512px] h-auto mb-8 drop-shadow-md rounded-xl object-cover"
                  alt="No image"
                />
              )}

              <div
                className="bg-white p-4 md:w-full lg:w-[768px] rounded-xl text-gray-900 drop-shadow-md"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(clinic.description),
                }}
              />
            </div>

            <div className="flex-1 min-w-80">
              <h4 className="text-xl font-bold tracking-normal text-center mb-4 text-gray-900">
                МЕТОДЫ ЛЕЧЕНИЯ И ПРОЦЕДУРЫ : {clinic.name}
              </h4>

              <div className="max-w-96 m-auto">
                <Accordion variant="splitted" className="text-gray-900">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Accordion 1"
                  >
                    fasdsdaffdsafdsa
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    fasdsdaf
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    fasdsdaf
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
