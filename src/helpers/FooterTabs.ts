export type FooterLinkProps = {
  name: string;
  href: string;
};

export type FooterTabProps = {
  title: string;
  items: FooterLinkProps[];
};

export const FooterTabs: FooterTabProps[] = [
  {
    title: "Company",
    items: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Brand Center", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Help center",
    items: [
      { name: "Discord Server", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Contact us", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Privacy Policy", href: "#" },
      { name: "Licensing", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Download",
    items: [
      { name: "IOS", href: "#" },
      { name: "Android", href: "#" },
      { name: "Windows", href: "#" },
      { name: "MacOS", href: "#" },
    ],
  },
];