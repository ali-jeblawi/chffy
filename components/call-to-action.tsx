'use client';

import React from 'react'
import { useTranslation } from 'react-i18next';

export default function CallToAction() {
  const { t } = useTranslation();
  
  return (
    <section className="video-wrapper video  bg-img bg-fixed" style={{backgroundAttachment:'fixed', backgroundImage: 'url(/images/call-to-action1.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 text-center">
               {/* <span><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i><i className="star-rating"></i></span> */}
            <div className="section-title text-white" style={{marginBottom:'60px'}}><span>{t('CallToActionLabel')}</span></div>
            <div className="section-subtitle text-white"><span>{t('CallToActionDesc')}</span></div>
            </div>
        </div>
        <div className="row">
            <div className="text-center col-md-12">
            <div className="butn-dark2 mt-30"> <a href="#contact"><span>{t('ReserveYourVoyage')}</span></a> </div>
            </div>
        </div>
    </div>
</section>
  );
}
