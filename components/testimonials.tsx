'use client';

import React from 'react'
import { useTranslation } from 'react-i18next';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import i18next from 'i18next';
import Image from 'next/image';


SwiperCore.use([Autoplay]);

export default function Testimonials() {
  const { t } = useTranslation();


  return (
    <section className="testimonials" id="testimonials">
        <div className="background bg-img bg-fixed section-padding pb-0" style={{background:'url(/images/slider/1.jpg)'}} data-overlay-dark="4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3 className="sub-title border-bot-dark">Testiominals</h3>
                    </div>
                    <div className="col-md-8">
                        <div className="section-title whte">What Client&apos;s Say?</div>
                        <div className="testimonials-box">
                              <Swiper
        className="owl-carousel owl-theme"
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 2200,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        loop={true}
        key={`${i18next.language}swiper`}
        speed={6500}>
      
        <SwiperSlide style={{ position: 'relative' }}>
        <div className="item"> <span>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                    </span>
                                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, quaerat. Quasi praesentium debitis totam molestiae cupiditate. Est, sunt veniam, aperiam velit debitis cupiditate beatae suscipit unde adipisci expedita eos ratione!</h5>
                                    <div className="info">
                                        <div className="author-img"> <Image fill src="/images/team/1.jpg" alt=""/> </div>
                                        <div className="cont">
                                            <h6>Demeail S.</h6> <span>Customer Review</span>
                                        </div>
                                    </div>
                                </div>
                               
        </SwiperSlide>
        <SwiperSlide style={{ position: 'relative' }}>
        <div className="item"> <span>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                        <i className="star-rating"></i>
                                    </span>
                                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, quaerat. Quasi praesentium debitis totam molestiae cupiditate. Est, sunt veniam, aperiam velit debitis cupiditate beatae suscipit unde adipisci expedita eos ratione!</h5>
                                    <div className="info">
                                        <div className="author-img"> <Image fill src="/images/team/3.jpg" alt=""/> </div>
                                        <div className="cont">
                                            <h6>Ray Smith</h6> <span>Customer Review</span>
                                        </div>
                                    </div>
                                </div>
        </SwiperSlide>
      </Swiper>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
