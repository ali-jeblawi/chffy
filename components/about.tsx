'use client';

import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { useTranslation } from 'react-i18next';

SwiperCore.use([Autoplay]);

export default function About() {
    const { t, i18n } = useTranslation();


    return (<>
        <section className="about section-padding" id="about" data-scroll-index="1">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sub-title border-bot-light">{t('AboutUs')}</div>
                    </div>
                    <div className="col-md-9">
                        <div className="section-title">{t('AboutUsLabel')}</div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <p>{t('About1')}</p>
                                <p>{t('About2')}</p>
                                <div className="ratting-point mt-30 mb-30">
                                    <div className="features-ratting">
                                        <h3>5</h3>
                                    </div>
                                    <div className="features-caption">
                                        <h3>{t('Ratings')}</h3>
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
                                    <div className={`col-6 ${i18n.language === "ar" ? 'text-start' : 'text-end'}`}> <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/images/about/3.JPG" style={{ marginTop: '25%' }} /> </div>
                                    <div className={`col-6 ${i18n.language === "en" ? 'text-start' : 'text-end'}`}> <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/images/about/2.JPG" /> </div>
                                    <div className={`col-6 ${i18n.language === "ar" ? 'text-start' : 'text-end'}`}> <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/images/about/1.JPG" /> </div>
                                    <div className={`col-6 ${i18n.language === "en" ? 'text-start' : 'text-end'}`}> <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/images/about/4.JPG" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
       
        </section>

        <section className="about section-padding " id="partners">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sub-title border-bot-light">{t('OurPartners')}</div>
                    </div>
                    <div className="col-md-9">
                        <div className="section-title">{t('OurPartnersLabel')}</div>
                        <div className="row">
                            <div className="col-md-12">
                                <p>{t('OurPartnersDesc')}</p>
                                <div className='logo-carousel mt-3'>
                                    <Image src="/images/partners/Logo-Fortis.png"
                                        onClick={() => {
                                            if (window)
                                                window.open('https://fortis.co/chauffeur-application/', '_blank')
                                        }}
                                        alt="Chauffeur Application Solutions" width={150} height={35} title="Chauffeur Application Solutions" />
                                      
                                    <Image src="/images/partners/Logo-01-01-1000_2.png"
                                        onClick={() => {
                                            if (window)
                                                window.open('https://pps.ae/', '_blank')
                                        }}
                                        alt="PPS Consultancy" width={80} height={45} title="PPS Consultancy" />
                                       
                                    <Image src="/images/partners/c300-02.png"
                                        onClick={() => {
                                            if (window)
                                                window.open('https://www.ggtworldwise.com/', '_blank')
                                        }}
                                        alt="Global Ground Transportation" width={55} height={55} title='Global Ground Transportation' />
                                </div>
                                {/* <Swiper
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
                   
                    </SwiperSlide>
                   
                    
                    <SwiperSlide>
                
                    </SwiperSlide>
                </Swiper>         */}
                            </div>
                   
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
