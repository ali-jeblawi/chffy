import type { Metadata } from 'next'
import TranslationsProvider from '@/components/translations-provider'
import initTranslations from '@/app/i18n'
import { dir } from 'i18next'
import { Rubik } from 'next/font/google'
import localFont from 'next/font/local';

import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "sweetalert2/src/sweetalert2.scss";
import '../animate.min.css';
import '../leaflet.css';
import '../globals.css';

const rubik = Rubik({
  style: 'normal',
  preload: true,
  subsets: ['latin'],
  weight: ['400','500','600','700']
});

const arabicFont = localFont({
  src: [
    {
      path: '../../public/fonts/arabic-font.otf',
      style: 'normal',
    },
  ],
});


export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  const { t } = await initTranslations(locale);
  return {
    title: `Gulf Traveler | قولف ترافلر`,
    description: t("AppDescription"),
    twitter: {
      card: 'summary_large_image'
    }
  };
}

export default async function RootLayout({
  children,
  params:{locale}
}: {
    children: React.ReactNode,
  params:{locale:string}
  }) {
  const { resources } = await initTranslations(locale);


  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
      <meta name="msapplication-TileColor" content="#222"/>
<meta name="theme-color" content="#222"/>
      </head>
      <body className={`${rubik.className} ${arabicFont.className}`}  suppressHydrationWarning={true}>
        <TranslationsProvider resources={resources} locale={locale}>
            {children}
        </TranslationsProvider>
      </body>
    </html>
  )
}
