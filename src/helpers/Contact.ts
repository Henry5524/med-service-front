import { FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "@/assets/icons";

export const ContactInfo = [
  {
    id: '1',
    name: 'Email',
    value: 'vW1fQ@example.com',
  },
  {
    id: '2',
    name: 'Phone',
    value: '+123456243',
  },
  {
    id: '3',
    name: 'Social',
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