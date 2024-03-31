import Carousel from "@/components/Carousel";
import { sanitizeHtml } from "@/utils/sanitizer";
import { Accordion, AccordionItem, Button, Image } from "@nextui-org/react";
// import { sanitize } from "dompurify";
// import DOMPurify from "dompurify";

export default function home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b> ОБЗОР: MEDICANA
  Medicana — это частная сеть многопрофильных медицинских центров. Уже много лет больницы Medicana занимают лидирующее место среди частных турецких клиник благодаря качественному сервису, безошибочному лечению, а также благодаря постоянному усовершенствованию в методах лечения и диагностики самых сложных заболеваний, где казалось – бы, уже нет надежды на выздоровление – специалисты клиники всегда изучают проблему максимально глубоко и подробно, чтобы не упустить даже самой незначимой мелочи, которая может стать решающей в судьбе больного. Врачи ежегодно повышают свою квалификацию проходя различные стажировки, курсы и семинары в ведущих медицинских учреждениях Европы и Северной Америки. Специалисты центра специализируются на лечении многих заболеваний, среди которых: онкологические болезни, трансплантация органов и др.
  
  Каждый год в клиниках сети Medicana обслуживаться много пациентов из разных стран мира.  Квалификация врачей, результативность лечения и безопасность – одни с основных преимуществ клиник.
  
  ОСОБЕННОСТИ ЛЕЧЕНИЯ
  
  В Medicanaрегулярно проводятся сложные онкологические и кардиохирургические операции с использованием новых технологий. Важно отметить, что в клиниках также проводится лечение и диагностика разных заболеваний таких направлений: онкологии, онкогематологии, ортопедии, гинекологии, пластической хирургии, офтальмологии, репродуктологии, сосудистой медицины, урологии и гастроэнтерологии.
  
  РАСПОЛОЖЕНИЕ 
  
  В сеть медицинских центров MEDICANA входят больницы в разных городах Турции, а именно: Стамбул, Анкара, Конья, Самсун, Сивас. `;

  const sanitizedData = sanitizeHtml(data);

  return (
    <div>
      <h1 className="text-black text-4xl font-bold tracking-normal text-left mb-8">
        МЕДИЦИНСКИЙ ЦЕНТР ANADOLU
      </h1>
      <div className="mb-8 lg:flex gap-8">
        <div className="mb-8">
          <Carousel />

          <div
            className="bg-white p-4 md:w-full lg:w-[768px] rounded-xl text-gray-900 drop-shadow-md"
            dangerouslySetInnerHTML={{ __html: sanitizedData }}
          />
        </div>

        <div className="flex-1 min-w-80">
          <h4 className="text-xl font-bold tracking-normal text-center mb-4 text-gray-900">
            МЕТОДЫ ЛЕЧЕНИЯ И ПРОЦЕДУРЫ : MEDICANA
          </h4>

          <div className="max-w-96 m-auto">
            <Accordion variant="splitted" className="text-gray-900">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>

              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
