'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import i18next from 'i18next';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

SwiperCore.use([Autoplay]);
export default function Hero() {
  const { t } = useTranslation();
  const heroSection = useRef<any>(null);

  useEffect(() => {
    const w = new WOW.WOW().init();
  }, []);
 
  
  return (
    <aside className="hero-section" id="home">
      <div className="hero-inner h-100 w-100">
        <div className="v-middle caption text-center">
          <div className="container">
            <div className="row justify-content-center h-100 w-100">
              <div className="col-lg-8 col-md-12 m-auto"> <span>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
                <i className="star-rating"></i>
              </span>
                <h4>{t('HeaderLabel')}</h4>
                <h1>{t('HeaderDesc')}</h1>
                <div className="butn-light mt-30 mb-30"> <a href="#cars"><span>{t('ExploreMore')}</span></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" data-scroll-nav="1" className="mouse smoothscroll">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
      </a>
      <Swiper
        className="swiper-container"
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 2200,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        loop={true}
        key={`${i18next.language}swiper`}
        speed={6500}>
      
        <SwiperSlide style={{ position: 'relative' }}>
          <Image src="/images/slider/1.jpeg" alt="php" fill className='hero-img' />
        </SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}>
          <Image src="/images/about/2.jpg" alt="php" fill className='hero-img'  />
        </SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}>
        <Image src="/images/about/3.jpg" alt="php" fill className='hero-img'  />
        </SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}>
        <Image src="/images/about/4.jpg" alt="php" fill className='hero-img'  />
        </SwiperSlide>
      </Swiper>
    </aside>
  );
}
