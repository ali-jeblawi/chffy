'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
const Swal = require("sweetalert2/dist/sweetalert2.js");

export default function Contat() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('-1');
    const [content, setContent] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        content: ''
    });
    const [reservationType, setReservationType] = useState("-1");
    const [tripType, setTripType] = useState("-1");
    
    const validateForm = () => {
        const _errors: any = {};
        const emailReqex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!name) _errors.name = t('ThisFieldIsMandatory');
        if (!email) _errors.email = t('ThisFieldIsMandatory');
        else if(email && !emailReqex.test(email))_errors.email = t('ThisEmailIsInvalid');
        if (!phone) _errors.phone = t('ThisFieldIsMandatory');
        if (type === '-1') _errors.type = t('ThisFieldIsMandatory');
        if (!content) _errors.content = t('ThisFieldIsMandatory');

        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    };

    return (
        <section className="contact section-padding" data-scroll-index="1" id="contact">
        <div className="container">
            <div className="row mb-30">
                <div className="col-md-3">
                    <div className="sub-title border-bot-light">Contact Us</div>
                </div>
                <div className="col-md-9">
                    <div className="section-title">Contact Us</div>
                    <p className="mb-30">Lorem ipsum viverra tristique justo duis vitae diaminte neque nivamus aestan ateuene artines ariianu the ateliten finibus viverra neclacus in the nedana mis erodino fermes dis parturient monte nascete ridiculus in the miss martin.</p>
                    <div className="row mb-30">
                                <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-15">
                                        <div className="icon"><span className="flaticon-call"></span></div>
                                        <div className="text">
                                            <p>Reservation</p> <a href="tel:855-100-4444">+966 57 458 4023</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-15">
                                        <div className="icon"><span className="flaticon-envelope"></span></div>
                                        <div className="text">
                                            <p>Email Info</p> <a href="mailto:info@chffy.com">info@chffy.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="reservations mb-15">
                                        <div className="icon"><span className="flaticon-location-pin"></span></div>
                                        <div className="text">
                                            <p>Address</p> 38 Broadway NY, 1001 USA
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Get in touch</h3>
                                    <form method="post" className="contact__form" action="mail.php">
                                        <div className="row">
                                            <div className="col-12">
                                                    <div className="alert alert-success contact__msg" style={{ display: "none" }} role="alert"> Your message was sent successfully. </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 form-group">
                                                <input name="name" type="text" placeholder="Your Name *" required/>
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <input name="email" type="email" placeholder="Your Email *" required/>
                                            </div>
                                            <div className="col-md-4 form-group">
                                                <input name="phone" type="text" placeholder="Your Phone *" required/>
                                            </div>
                                            <div className="col-md-4 form-group">
                                                    <select name="tripType" value={tripType} onChange={(e:any)=>setTripType(e.target.value)}>
                                                        <option selected disabled value={'-1'}>Trip type *</option>
                                                        <option value={'0'}>Airport</option>
                                                        <option value={'1'}>Other</option>
                                                        </select>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <select name="reservationType" value={reservationType} onChange={(e:any)=>setReservationType(e.target.value)} >
                                                        <option selected disabled value={"-1"}>Reservation type *</option>
                                                        <option value={"0"}>Hour</option>
                                                        <option value={"1"}>Day</option>
                                                        <option value={"2"}>Trip</option>
                                                        </select>
                                                </div>
                                                <div className="col-md-4 form-group">
                                            </div>
                                                {tripType === '0' && (
                                                    <>
                                                         <div className="col-md-4 form-group">
                                                <input name="tripNumber" type="text" placeholder="Trip number *" required/>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                <input name="arrivalHour" type="text" placeholder="Arrival hour *" required/>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                <input name="airlinesName" type="text" placeholder="Airlines name *" required/>
                                                        </div>
                                                    </>
                                                )}
                                               
                                                {(reservationType === "2") && (
                                                    <>
                                                       <div className="col-md-4 form-group">
                                                <input name="source" type="text" placeholder="Source *" required/>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                <input name="destination" type="text" placeholder="Destination *" required/>
                                                </div>
                                                        </>
                                                )}
                                                {(reservationType === "0" || reservationType === "1") && (
                                                     <div className="col-md-4 form-group">
                                                     <input name="startingPoint" type="text" placeholder="Starting point *" required/>
                                                     </div>
                                                )}
                                               
                                             
                                               
                                            {/* <div className="col-md-12 form-group">
                                                    <textarea name="message" id="message" cols={30} rows={4} placeholder="Message *" required></textarea>
                                            </div> */}
                                            <div className="col-md-12 mt-10">
                                                <button type="submit" className="butn-dark2"><span>Send Message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
