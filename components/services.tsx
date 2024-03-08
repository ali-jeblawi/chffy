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
                    <div className="sub-title border-bot-light">Our Services</div>
                </div>
                <div className="col-md-9">
                    <div className="section-title">Chffy Services</div>
                    <p>ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row justify-content-between">
                        <div className="item col-12 col-md-6 col-lg-3"> <span className="number">01</span>
                            <div className="icon"><i className="flaticon-world"></i></div>
                            <h5>Service 1</h5>
                            <p>norttito sit amet space, mus nellentesque habitant.</p>
                        </div>
                        <div className="item col-12 col-md-6 col-lg-4"> <span className="number">02</span>
                            <div className="icon"><i className="flaticon-car"></i></div>
                            <h5>Service 2</h5>
                            <p>norttito sit amet space, mus nellentesque habitant.</p>
                        </div>
                        <div className="item col-12 col-md-6 col-lg-4"> <span className="number">03</span>
                            <div className="icon"><i className="flaticon-bed"></i></div>
                            <h5>Service 3</h5>
                            <p>norttito sit amet space, mus nellentesque habitant.</p>
                        </div>
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
