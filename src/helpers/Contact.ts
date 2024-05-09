import { FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "@/assets/icons";

export const ContactInfo = [
  {
    id: '1',
    name: 'Почта',
    value: 'medserviceQ@example.com',
  },
  {
    id: '2',
    name: 'Телефон',
    value: '+123456789',
  },
  {
    id: '3',
    name: 'Социальное',
    links: [
      {
        name: 'Facebook',
        icon: FacebookIcon,
        href: 'https://facebook.com',
      },
      {
        name: 'Instagram',
        icon: InstagramIcon,
        href: 'https://twitter.com',
      },
      {
        name: 'Telegram',
        icon: TelegramIcon,
        href: 'https://twitter.com',
      },
      {
        name: 'Twitter',
        icon: TwitterIcon,
        href: 'https://twitter.com',
      }
    ],
  },
]