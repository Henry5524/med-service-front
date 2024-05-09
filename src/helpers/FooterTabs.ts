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
    title: "Компания",
    items: [
      { name: "О нас", href: "#" },
      { name: "Карьера", href: "#" },
      { name: "Связаться с нами", href: "#" },
      { name: "Блог", href: "#" },
    ],
  },
  {
    title: "Социальное",
    items: [
      { name: "Инстаграм", href: "#" },
      { name: "Твиттер", href: "#" },
      { name: "Мета", href: "#" },
      { name: "Телеграм", href: "#" },
    ],
  },
  {
    title: "Центр помощи",
    items: [
      { name: "Политика конфиденциальности", href: "#" },
      { name: "Лицензирование", href: "#" },
      { name: "Условия & Использования", href: "#" },
    ],
  },
  {
    title: "Скачать",
    items: [
      { name: "IOS", href: "#" },
      { name: "Android", href: "#" },
    ],
  },
];