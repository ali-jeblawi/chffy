'use client';

import i18nConfig from '@/i18nConfig';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { useGSAP} from '@gsap/react'


export default function Navbar() {

  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const tl = useRef<any>(null);
  const container = useRef(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.set('.nav-link', { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to('.menu-overlay', {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      });
      // .to(".nav-link", {
      //   y: 0,
      //   duration: 1,
      //   stagger: 0.1,
      //   delay: -0.75,
      //   ease: "power4.inOut"
      // })

  }, { scope: container });
  
  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

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
  
  const links = [
    { path: '#home', label: t('Home') },
    { path: '#about', label: t('About') },
    { path: '#services', label: t('Services') },
    { path: '#cars', label: t('Cars') },
    { path: '#contact', label: t('Contact') }
  ];

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar" ref={container}>
      <div className="container">
        <div className="logo-wrapper">
          <Link className="logo" href={'/'}>
            <Image src="/images/logo-dark.png" className="logo-img" alt="" width={35} height={45} />
            <span>{t('Chffy')}</span>
          </Link>
        </div>
        <div className="butn-light menu" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352" /></svg>
        </div>

      </div>
      <div className='menu-overlay'>
        <div className='menu-overlay-bar w-100 h-100'>
          <div className='menu-logo container'>
          <div className="logo-wrapper p-0">
          <Link className="logo" href={'/'}  onClick={toggleMenu}>
            <Image src="/images/logo-dark.png" className="logo-img" alt="" width={35} height={45} />
            <span>{t('Chffy')}</span>
          </Link>
            </div>
            <div className='menu-close'  onClick={toggleMenu}>
            <p className='m-0'>{t('Close')}</p>
          </div>
          </div>
         
          <div className='menu-links mx-auto text-center' style={{marginTop:'5%'}}>
          <ul className="navbar-nav ms-auto">
            {links.map(i=><li className="nav-item" key={i.label}>
              <a className="nav-link" href={i.path} role="button"  onClick={toggleMenu}>{i.label}</a>
            </li>)} 
           
            <li className="nav-item">
              <span
                className="nav-link arabic"
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

      </div>
    </nav>
  );
}
