import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Api } from "@/services";
import {
  MappedClinics,
  MappedServices,
  mapOneClinic,
  mapServices,
} from "@/lib";
import { sanitizeHtml } from "@/utils/sanitizer";
import {
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import Carousel from "@/components/Carousel";

export default function ClinicPage() {
  const router = useRouter();
  const [clinic, setClinic] = useState<MappedClinics | any>();
  const [services, setServices] = useState<MappedServices[]>([]);
  const clinicId = router.query.clinics as string | string[] | undefined;

  async function fetchData(): Promise<void> {
    if (typeof clinicId === "string") {
      const clinicRes = await Api.getClinicById(clinicId);
      const servicesRes = await Api.getServices();
      setClinic(mapOneClinic(clinicRes));
      setServices(mapServices(servicesRes));
    }
  }

  useEffect(() => {
    fetchData();
  }, [clinicId]);

  return (
    <div>
      {clinic && (
        <div>
          <h1 className="text-black text-4xl font-bold tracking-normal text-left mb-8">
            {clinic.name}
          </h1>
          <div className="mb-8 lg:flex gap-8">
            <div className="mb-8">
              {clinic.image !== undefined ? (
                <Carousel images={clinic.image} />
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
              <h4 className="text-xl font-bold tracking-normal uppercase text-center mb-4 text-gray-900">
                МЕТОДЫ ЛЕЧЕНИЯ И ПРОЦЕДУРЫ : {clinic.name}
              </h4>

              <Accordion variant="splitted" className="text-gray-900">
                {clinic.services.map((service: MappedServices) => (
                  <AccordionItem
                    key={service.id}
                    aria-label={service.serviceName}
                    title={service.serviceName}
                  >
                    <Listbox aria-label="Actions">
                      {services
                        ?.filter(
                          (child: MappedServices) =>
                            child.parent[0]?.id === service.id &&
                            child.id !== service.id,
                        )
                        .map((child) => (
                          <ListboxItem key={child.id}>
                            {child.serviceName}
                          </ListboxItem>
                        ))}
                    </Listbox>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
