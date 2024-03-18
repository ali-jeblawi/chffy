'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import i18next from 'i18next';

export default function CallToAction() {
  const { t } = useTranslation();

  
  return (
    <section className="video-wrapper video section-padding bg-img bg-fixed" style={{backgroundAttachment:'fixed', backgroundImage: 'url(/images/call-to-action.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 text-center">
               {/* <span><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i></span> */}
            <div className="section-title text-white"><span>{t('CallToActionLabel')}</span></div>
            <div className="section-subtitle text-white"><span>{t('CallToActionDesc')}</span></div>
            </div>
        </div>
        <div className="row">
            <div className="text-center col-md-12">
            <div className="butn-light mt-30"> <a href="#contact"><span>{t('ReserveYourVoyage')}</span></a> </div>
            </div>
        </div>
    </div>
</section>
  );
}
