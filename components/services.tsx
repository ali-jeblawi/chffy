'use client';

import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { t } = useTranslation();

    return (
        <section className="amenities section-padding" id="services">
        <div className="container">
            <div className="row mb-30">
                <div className="col-md-3">
                        <div className="sub-title border-bot-light">{t('OurServices')}</div>
                </div>
                <div className="col-md-9">
                        <div className="section-title">{t('OurServicesLabel')}</div>
                        <p>{t('OurServicesDesc')}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row justify-content-between">
                    <div className="item col-12 col-md-6 col-lg-4"> <span className="number">03</span>
                            <div className="icon"><i className="flaticon-bed"></i></div>
                            <h5>{t('Service3Label')}</h5>
                                <p>{t('Service3Desc')}</p>
                        </div>
                        <div className="item col-12 col-md-6 col-lg-4"> <span className="number">02</span>
                            <div className="icon"><i className="flaticon-car"></i></div>
                            <h5>{t('Service2Label')}</h5>
                                <p>{t('Service2Desc')}</p>
                        </div> <div className="item col-12 col-md-6 col-lg-4"> <span className="number">01</span>
                            <div className="icon"><i className="flaticon-world"></i></div>
                                <h5>{t('Service1Label')}</h5>
                                <p>{t('Service1Desc')}</p>
                        </div>
                       
                        
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
