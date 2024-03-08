'use client';

import i18nConfig from '@/i18nConfig';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Navbar() {

  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
    router.refresh();
  };

  const handleCloseSideMenu = () => {
    let i = document.body;
    i?.classList.remove("sidebar-open");
    i?.classList.remove("no-scroll");
  }
  

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">
          <Link className="logo" href={'/'}>
            <Image src="/images/logo-dark.png" className="logo-img" alt="" width={35} height={45} />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i className="ti-menu"></i></span> </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home" role="button" >Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">About</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" href="#services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#testimonials">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#contact">Contact</Link>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                style={{cursor:'pointer'}}
              onClick={() => {
                  handleCloseSideMenu();
                  handleChange(currentLocale === 'ar' ? 'en' : 'ar');
                }}>
                {currentLocale === 'en' ? 'العربيّة' : 'English'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
