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
                        <div className="sub-title border-bot-light">Discover</div>
                    </div>
                    <div className="col-md-9">
                        <div className="section-title">Our Cars</div>
                        <p>Reserve the car you prefer (depending on availability). Choose from a variety of sizes and styles. Lorem ipsum viverra tristique justo duis vitae diaminte neque nivamus aestan artines in the nedana mis erodino fermen.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            className="wow fadeOut mt-3" data-wow-delay="0.3s"
                            style={{ height: '350px' }}
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                319: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
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
                                <div className="rooms3 mb-30">
                                    <div className="room-img"><img src="/images/slider/3.jpg" alt="" className="w-100" /></div>
                                    <div className="room-header">
                                        <h3 className="room-label">Car 0</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                   
                    
                            <SwiperSlide>
                                <div className="rooms3 mb-30">
                                    <div className="room-img"><img src="/images/slider/1.jpg" alt="" className="w-100" /></div>
                                    <div className="room-header">
                                        <h3 className="room-label">Car 1</h3>
                                    </div>
                     
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rooms3 mb-30">
                                    <div className="room-img"><img src="/images/slider/3.jpg" alt="" className="w-100" /></div>
                                    <div className="room-header">
                                        <h3 className="room-label">Car 2</h3>
                                    </div>
                 
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rooms3 mb-30">
                                    <div className="room-img"><img src="/images/slider/5.jpg" alt="" className="w-100" /></div>
                                    <div className="room-header">
                                        <h3 className="room-label">Car 3</h3>
                                    </div>
                  
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rooms3 mb-30">
                                    <div className="room-img"><img src="/images/slider/1.jpg" alt="" className="w-100" /></div>
                                    <div className="room-header">
                                        <h3 className="room-label">Car 4</h3>
                                    </div>
                   
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rooms3 mb-30">
                                    <div className="room-img"><img src="/images/slider/4.jpg" alt="" className="w-100" /></div>
                                    <div className="room-header">
                                        <h3 className="room-label">Car 5</h3>
                                    </div>
             
                                </div>
                            </SwiperSlide>
                      
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
