'use client';

import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

SwiperCore.use([Autoplay]);

export default function About() {
    const { t } = useTranslation();


    return (
        <section className="about section-padding pb-0" id="about" data-scroll-index="1">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                        <div className="sub-title border-bot-light">{t('AboutUs')}</div>
                </div>
                <div className="col-md-9">
                    <div className="section-title">Chffy</div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                                <p>{t('About1')}</p>
                                <p>{t('About2')}</p>
                                <div className="ratting-point mt-30 mb-30">
                                <div className="features-ratting">
                                    <h3>4.9</h3>
                                </div>
                                <div className="features-caption">
                                    <h3>Rating based on 2500+ reviews</h3>
                                    <div className="rating"> <span>
                                            <i className="star-rating"></i>
                                            <i className="star-rating"></i>
                                            <i className="star-rating"></i>
                                            <i className="star-rating"></i>
                                            <i className="star-rating"></i>
                                        </span> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row g-3">
                                    <div className="col-6 text-end"> <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/images/about/4.jpg" style={{ marginTop: '25%'}} /> </div>
                                <div className="col-6 text-start"> <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/images/about/3.jpg"/> </div>
                                <div className="col-6 text-end"> <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/images/about/2.jpg"/> </div>
                                <div className="col-6 text-start"> <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/images/about/1.jpg"/> </div>
                            </div>
                        </div>
                        </div>
                        <div className="section-title mt-4 mb-2">{t('OurPartners')}</div>
                        <p>{t('OurPartnersDesc')}</p>

                        <Swiper
                    className="logo-carousel wow fadeOut mt-3" data-wow-delay="0.3s"
                    spaceBetween={20}
                    slidesPerView={5}
                    breakpoints={{
                        319: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        }
                }}
                centeredSlides
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2200,
                        pauseOnMouseEnter: false,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    key={`${i18next.language}swiper`}
                    speed={3000}>
      
        
                    <SwiperSlide>
                    <Image src="/images/partners/Logo-Fortis.png"
                        onClick={() => {
                            window.open('https://fortis.co/chauffeur-application/','_blank')
                        }}
                        alt="fortis" width={170} height={40} />
                    </SwiperSlide>
                   
                    
                    <SwiperSlide>
                    <Image src="/images/partners/c300-02.png"
                         onClick={() => {
                            window.open('https://www.ggtworldwise.com/','_blank')
                        }}
                        alt="ggtworldwise" width={70} height={70} />
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            </div>
            
       
    </section>

    );
}
