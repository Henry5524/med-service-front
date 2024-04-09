import React from "react";
import {
  Footer as FooterComponent,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  FooterIcon,
} from "flowbite-react";
import {
  FooterLinkProps,
  FooterTabProps,
  FooterTabs,
} from "@/helpers/FooterTabs";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/assets/icons";

export default function Footer() {
  return (
    <FooterComponent className="relative bottom-0">
      <div className="w-full">
        <div className=" w-full max-w-[1024px] m-auto md:flex  justify-between p-6">
          {FooterTabs.map((tab: FooterTabProps) => (
            <div key={tab.title} className="mb-4 text-center">
              <FooterTitle
                title={tab.title}
                className="mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
              />
              <FooterLinkGroup col>
                {tab.items.map((item: FooterLinkProps) => (
                  <FooterLink key={item.name} href={item.href}>
                    {item.name}
                  </FooterLink>
                ))}
              </FooterLinkGroup>
            </div>
          ))}
        </div>
        <div className="w-full bg-[#11181C] px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <div className="w-full max-w-[1024px] m-auto flex justify-between px-6">
            <FooterCopyright href="#" by="Med service ™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={FacebookIcon} />
              <FooterIcon href="#" icon={InstagramIcon} />
              <FooterIcon href="#" icon={TelegramIcon} />
              <FooterIcon href="#" icon={TwitterIcon} />
            </div>
          </div>
        </div>
      </div>
    </FooterComponent>
  );
}
