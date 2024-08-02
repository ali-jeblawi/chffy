'use client';

import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import i18next from 'i18next';

SwiperCore.use([Autoplay]);
export default function Cars() {
    const { t } = useTranslation();

    return (
        <section className="room4 section-padding" id="cars">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-md-3">
                        <div className="sub-title border-bot-light">{t('Discover')}</div>
                    </div>
                    <div className="col-md-9">
                        <div className="section-title">{t('OurCars')}</div>
                        <p>{t('OurCarsDesc')}</p>
                        <div className="col-md-12 mt-5">
                        <div className="row mb-30 mt-3 justify-content-center">
                                <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-30">
                                        <div className="icon"><Image src="/images/cars/Chevrolet.png"
                        alt="Chevrolet" width={160} height={85} /></div>
                                        <div className="text"><p>{t('Chevrolet')}</p></div>
                                        <div className="text"><p>{t('Iconic Comfort, Contemporary Design')}</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-30">
                                        <div className="icon"> <Image src="/images/cars/Mercedes.png"
                        alt="Mercedes" width={75} height={75} /></div>
                                        <div className="text"><p>{t('Mercedes-Benz')}</p></div>
                                        <div className="text"><p>{t('Synonymous with Elegance and Innovation')}</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-30">
                                        <div className="icon"><Image src="/images/cars/bmw.png" alt="bmw" width={80} height={80} /></div>
                                        <div className="text"><p>{t('BMW')}</p></div>
                                        <div className="text"><p>{t('German Engineering at its Most Luxurious')}</p></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-30">
                                        <div className="icon">   <Image src="/images/cars/GMC-Logo.png"
                        alt="GMC" width={170} height={65} /></div>
                                        <div className="text"><p>{t('GMC')}</p></div>
                                        <div className="text"><p>{t('Boldness Meets Sophistication')}</p></div>
                                    </div>
                                </div>   <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-30">
                                        <div className="icon"><Image src="/images/cars/Ford.png" alt="Ford" width={150} height={70} /></div>
                                        <div className="text"><p>{t('Ford')}</p></div>
                                        <div className="text"><p>{t('The Art of American Luxury')}</p></div>
                                    </div>
                                </div>
                                
                            </div>
                             {/* <Swiper
                    className=" wow fadeOut mt-3" data-wow-delay="0.3s"
                            spaceBetween={20}
                
                    slidesPerView={4}
                    breakpoints={{
                        319: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        900: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                }}
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
                    <Image src="/images/cars/bmw.png"
                        alt="bmw" width={80} height={80} />
                    </SwiperSlide>
                   
                    
                    <SwiperSlide>
                    <Image src="/images/cars/Mercedes.png"
                        alt="Mercedes" width={75} height={75} />
                            </SwiperSlide>
                            <SwiperSlide>
                    <Image src="/images/cars/Ford.png"
                        alt="Ford" width={150} height={70} />
                            </SwiperSlide>
                            <SwiperSlide>
                    <Image src="/images/cars/GMC-Logo.png"
                        alt="GMC" width={130} height={50} />
                            </SwiperSlide>
                            <SwiperSlide>
                    <Image src="/images/cars/Chevrolet.png"
                        alt="Chevrolet" width={120} height={60} />
                            </SwiperSlide>
                </Swiper> */}
                    </div>
                    </div>
                   
                </div>
              
            </div>
        </section>
    );
}
