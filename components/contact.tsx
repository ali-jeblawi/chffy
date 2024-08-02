'use client';

import React, {  useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { DatePicker, Modal, Select} from 'antd';
import UtilsInstance, { countriesCode } from '@/helpers/utils';
// import { MapContainer, Marker, TileLayer, useMap} from 'react-leaflet'

const Swal = require("sweetalert2/dist/sweetalert2.js");

const props={center:[ 24.69999996, 46.73333003], zoom: 13, scrollWheelZoom: false,draggable:true};
let MapContainer:any, Marker:any, TileLayer:any, useMap:any;

function DraggableMarker({position, setPosition}:any) {
    const markerRef = useRef(null);

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker:any = markerRef.current
          if (marker != null) {
            setPosition(marker?.getLatLng())
          }
        },
      }),
      [],
    )
 
    return Marker &&(
      <Marker
        {...props}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
      </Marker>
    )
}
const BoundaryCanvas=()=> {
    const map = useMap();
    React.useEffect(() => {
      if (map) {
       
        map.invalidateSize();
    }
      
    }, // eslint-disable-next-line
      [map]);
    
    return <></>
  }

export default function Contat() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [tripNumber, setTripNumber] = useState('');
    const [arrivalHour, setArrivalHour] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [airlinesName, setAirlinesName] = useState('');
    const [isLoadingMap, setIsLoadingMap] = useState(false);
    useEffect(() => {
        MapContainer = require("react-leaflet")?.MapContainer;
        TileLayer = require("react-leaflet")?.TileLayer;
        useMap = require("react-leaflet")?.useMap;
        Marker = require("react-leaflet")?.Marker;    

    },[]);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        startingPoint: '',
        destination: '',
        source: '',
        tripNumber: '',
        arrivalHour: '',
        reservationType: '',
        tripType: '',
        airlinesName: '',
        reservationTime:''
    });
           

    const [reservationType, setReservationType] = useState("-1");
    const [tripType, setTripType] = useState("-1");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [startingPoint, setStartingPoint] = useState("");
    const [countrieCode, setCountrieCode] = useState("+966");
    
    const [sourcPosition, setSourcePosition] = useState<any>(props.center)
    const [startingPointPosition, setStartingPointPosition] = useState<any>(props.center)
    const [destinationPosition, setDestinationPosition] = useState<any>(props.center)
    const [openSourceModal, setOpenSourceModal] = useState<boolean>(false)
    const [openDestinationModal, setOpenDestinationModal] = useState<boolean>(false)
    const [openStartingPointModal, setOpenStartingPointModal] = useState<boolean>(false)
    
    const validateForm = () => {
        const _errors: any = {};
        const emailReqex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!name) _errors.name = t('ThisFieldIsMandatory');
        if (!email) _errors.email = t('ThisFieldIsMandatory');
        else if (email && !emailReqex.test(email)) _errors.email = t('ThisEmailIsInvalid');
        if (!phone) _errors.phone = t('ThisFieldIsMandatory');
        if (reservationType === '-1') _errors.reservationType = t('ThisFieldIsMandatory');
        if (tripType === '-1') _errors.tripType = t('ThisFieldIsMandatory');
        if (tripType === '0' && !airlinesName) _errors.airlinesName = t('ThisFieldIsMandatory');
        if (tripType === '0' && !tripNumber) _errors.tripNumber = t('ThisFieldIsMandatory');
        if (tripType === '0' && !arrivalHour) _errors.arrivalHour = t('ThisFieldIsMandatory');
        if ((reservationType === '0' || reservationType === '1') && !startingPoint) _errors.startingPoint = t('ThisFieldIsMandatory');
        if (reservationType === '2' && !destination) _errors.destination = t('ThisFieldIsMandatory');
        if (reservationType === '2' && !source) _errors.source = t('ThisFieldIsMandatory');
        if(!reservationTime)_errors.reservationTime = t('ThisFieldIsMandatory');
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    };

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${sourcPosition.lat}&lon=${sourcPosition.lng}`, {
            method: 'GET'
        }).then(async (response: any) => {
            const data = await response.json();
            setSource(data.display_name);
        });
    }, [sourcPosition]);
    
    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${destinationPosition.lat}&lon=${destinationPosition.lng}`, {
            method: 'GET'
        }).then(async (response: any) => {
            const data = await response.json();
            setDestination(data.display_name);
        });
    }, [destinationPosition]);

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${startingPointPosition.lat}&lon=${startingPointPosition.lng}`, {
            method: 'GET'
        }).then(async (response: any) => {
            const data = await response.json();
            setStartingPoint(data.display_name);
        });
    }, [startingPointPosition]);

    return (
        <section className="contact section-padding" data-scroll-index="1" id="contact">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-md-3">
                        <div className="sub-title border-bot-light">{t("ContactUs")}</div>
                    </div>
                    <div className="col-md-9">
                        <div className="section-title">{t('ContactUsLabel')}</div>
                        <p className="mb-30"> {t('ContactUsDesc')}</p>
                        <div className="row mb-30">
                            <div className="col-lg-4 col-md-12">
                                <div className="reservations mb-15">
                                    <div className="text">
                                    <p>{t('Phone Reservation')}</p> <a target='_blank' dir="ltr" href="tel:00966503670676">+966 50 367 0676</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="reservations mb-15">
                                    <div className="text">
                                    <p>{t('Email Info')}</p> <a target='_blank' href="mailto:Contact@gulftravy.com">Contact@gulftravy.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="reservations mb-15">
                                    <div className="text">
                                        <p>{t('Address')}</p> {t('Address1')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className='mt-5 mb-4'>{t('Get in touch')}</h3>
                                        <form className="contact__form" action="" onSubmit={(e) => {
                                            e.preventDefault();
                                            if (validateForm()) {
                                                fetch("https://apis.cequens.net/email/send", {
                                                    method: 'POST',
                                                    headers: {
                                                        accept: 'application/json',
                                                        'Content-Type': 'application/json',
                                                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIwMGFiYWE3ZTE1NjA1YWVhZDg3ODkzNGRkYzVhYzU5MmVhZGZmNzk3MTEwNTE1NGE2NjBmOWUwZGVmNmQyNDIyODZiYmUzY2Q4MjQyNTZmMjJmMGRiMTZkOGI0NDMzMmM3MjZkYThlNzBiMmFjOWRkNTViZWJhZDUzZDBkZTA3NTI0ODgyNzdjYTUzOGFiZDE0YjgwMGE3ZWRlYjMwOTMiLCJpYXQiOjE3MDc3Mjg4MTcsImV4cCI6MzI4NTYwODgxN30.gp0AmF70MNtr3dXusl7xiotfDCxVesvlLyxGE3AXnSY'
                                                    },
                                                    body: JSON.stringify({
                                                        "source": "Info@bialahapp.com",
                                                        "destinations": "info@atraslab.com",
                                                        "subject": t('NewContactRequest'),
                                                        "body": `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" style="font-family:Tajawal, sans-serif"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>CHFFY</title> <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]--> <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml>
                                            <![endif]--> <!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800&display=swap" rel="stylesheet"><!--<![endif]--><style type="text/css">#outlook a { padding:0;}.es-button { mso-style-priority:100!important; text-decoration:none!important;}a[x-apple-data-detectors] { color:inherit!important; text-decoration:none!important; font-size:inherit!important; font-family:inherit!important; font-weight:inherit!important; line-height:inherit!important;}.es-desk-hidden { display:none; float:left; overflow:hidden; width:0; max-height:0; line-height:0; mso-hide:all;} .es-button-border:hover a.es-button, .es-button-border:hover button.es-button { background:#f4a3c1!important;}
                                            .es-button-border:hover { border-color:#42d159 #42d159 #42d159 #42d159!important; background:#f4a3c1!important; border-style:solid solid solid solid!important;}@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:46px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:46px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important }
                                             .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important }
                                             .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important }
                                             table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important }
                                             .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important }
                                             .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }</style>
                                             </head> <body data-new-gr-c-s-loaded="14.1162.0" style="width:100%;font-family:Tajawal, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#ffffff"></v:fill> </v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF"><tr>
                                            <td valign="top" style="padding:0;Margin:0"><table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"><tr><td align="center" style="padding:0;Margin:0"><table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none"><tr><td align="left" bgcolor="#212121" style="padding:20px;Margin:0;background-color:#212121"><table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr>
                                            <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"><tr><td align="center" style="padding:20px;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#1C3B4E;font-size:18px"><img src="https://takvzk.stripocdn.email/content/guids/CABINET_6e1a5a558a83bdf868473747d1fec10112b42815e827bbc9b6ab6b02168a5435/images/logowhite.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="100" title="Logo"></a> </td></tr><tr>
                                            <td align="center" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:55px;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;font-size:46px;font-style:normal;font-weight:normal;color:#9d8560">${t('NewContactRequest')}</h1></td></tr><tr><td align="left" class="es-m-p15r" style="Margin:0;padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#1C3B4E;font-size:18px"><br></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong>${t('Name')}</strong></p></td></tr> <tr>
                                            <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${name}</p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong>${t('Email')}</strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${email}</p></td></tr> <tr>
                                            <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong>${t('Phone')}</strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${countrieCode + '' + phone}</p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong></strong><strong>${t('TripType')}</strong><strong></strong></p></td></tr> <tr>
                                            <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${tripType === '0' ? t('Airport') : t('Other')}</p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong></strong><strong>${t('ReservationType')}</strong><strong></strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${reservationType === '0' ? t('Hour') : reservationType === '1' ? t('Day') : t('Trip')}</p></td></tr> <tr>
                                            <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong>${t('StartingPoint')}</strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${startingPoint || t('NotAvialable')}</p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong></strong><strong>${t('Source')}</strong><strong></strong></p></td></tr> <tr>
                                            <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${source || t('NotAvialable')}</p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong></strong><strong>${t('Destination')}</strong><strong></strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${destination || t('NotAvialable')}</p></td></tr> <tr>
                                            <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong>${t('ArrivalHour')}</strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${arrivalHour || t('NotAvialable')}</p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong>${t('AirlinesName')}</strong></p></td></tr> <tr>
                                            <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${airlinesName || t('NotAvialable')}</p></td></tr><tr><td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:27px;color:#9d8560;font-size:18px"><strong>${t('TripNumber')}</strong></p></td></tr><tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Tajawal, sans-serif;line-height:23px;color:#ffffff;font-size:15px">${tripNumber || t('NotAvialable')}</p></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr> </table></div></body></html>`
                                                    })
                                                }).then(function (data) {
                                                    if (data.ok) {
                                                        Swal.fire({
                                                            title: t('DoneSuccessfully'),
                                                            text: t('DoneSuccessfully1'),
                                                            icon: 'success',
                                                            confirmButtonText: t('Close')
                                                        });
                                                        setName('');
                                                        setEmail('');
                                                        setPhone('');
                                                        setSource('');
                                                        setStartingPoint('');
                                                        setDestination('');
                                                        setArrivalHour('');
                                                        setAirlinesName('');
                                                        setTripNumber('');
                                                        setReservationType('-1');
                                                        setTripType('-1');
                                                    } else {
                                                        Swal.fire({
                                                            title: t('AnErrorOccurred'),
                                                            text: t('AnErrorOccurred1'),
                                                            icon: "error",
                                                            confirmButtonText: t("OK"),
                                                        });
                                                    }
                                            
                                                });
                                            }
                                        }}>
                                           
                                            <div className="row">
                                                <div className="col-md-4 form-group">
                                                    <input type="text" placeholder={t("Your Name *")} value={name} onChange={(e) => setName(e.target.value)} />
                                                    {errors.name && <span className='error-msg'>{errors.name}</span>}
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("Your Email *")} />
                                                    {errors.email && <span className='error-msg'>{errors.email}</span>}
                                                </div>
                                                <div className="col-md-4 form-group" dir='ltr'>
                                                    <div className="d-flex w-100">
                                                    <select style={{ width: '80px', direction: "ltr" }} value={countrieCode} onChange={(e: any) => {
                                                        setCountrieCode(e.target.value);
                                                    }}>
                                                        {countriesCode.map((item, index) => (<option key={index} value={item.dial_code}>
                                                            {/* <ReactCountryFlag countryCode={item.code}
                                                            svg
                                                            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                                            cdnSuffix="svg"
                                                            
                                                        /> */}
                                                            {item.dial_code}</option>))}
                                                    </select>
                                                    <input style={{ width: 'calc(100% - 80px)', paddingInline: '10px' }} maxLength={10} type="text" value={phone} onChange={(e) => setPhone(UtilsInstance.preventString(e.target.value))} placeholder={t("Your Phone *")} />
                                                  
                                                    </div>
                                                     {errors.phone && <span className='error-msg'>{errors.phone}</span>}
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <select value={tripType} onChange={(e: any) => {
                                                        setTripType(e.target.value);
                                                        setAirlinesName('');
                                                        setTripNumber('');
                                                        setArrivalHour('');
                                                    }}>
                                                        <option disabled value={'-1'}>{t('Trip type *')}</option>
                                                        <option value={'0'}>{t('Airport')}</option>
                                                        <option value={'1'}>{t('Other')}</option>
                                                    </select>
                                                    {errors.tripType && <span className='error-msg'>{errors.tripType}</span>}
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <select value={reservationType} onChange={(e: any) => {
                                                        setReservationType(e.target.value);
                                                        setDestination('');
                                                        setSource('');
                                                        setStartingPoint('');
                                                    }}>
                                                        <option disabled value={"-1"}>{t('Reservation type *')}</option>
                                                        <option value={"0"}>{t('Hour')}</option>
                                                        <option value={"1"}>{t('Day')}</option>
                                                        <option value={"2"}>{t('Trip')}</option>
                                                    </select>
                                                    {errors.reservationType && <span className='error-msg'>{errors.reservationType}</span>}

                                                </div>
                                                <div className="col-md-4 form-group">
                                                        <DatePicker
                                                                style={{ width: '100%' }}
                                                                showTime
                                                        onChange={(v, date) => setReservationTime(date as string)}
                                                        showNow={false}
                                                        use12Hours={false}

                  locale={
                    {
                      "lang": {
                        "locale": "ar_EG",
                        "placeholder": t("SelectDate"),
                        "rangePlaceholder": [t("StartDate"), t("EndDate")],
                        "today": t('Today'),
                        "now": t('Now'),
                          "backToToday": "Back to today",
                          "ok": t('OK3'),
                          "clear": "Clear",
                          "month": "Month",
                          "year": "Year",
                          "timeSelect": "Select time",
                          "dateSelect": "Select date",
                          "monthSelect": "Choose a month",
                          "yearSelect": "Choose a year",
                          "decadeSelect": "Choose a decade",
                          "yearFormat": "YYYY",
                          "dateFormat": "M/D/YYYY",
                          "dayFormat": "D",
                          "dateTimeFormat": "M/D/YYYY HH:mm:ss",
                          "monthFormat": "MM",
                          "monthBeforeYear": true,
                          "previousMonth": "Previous month (PageUp)",
                          "nextMonth": "Next month (PageDown)",
                          "previousYear": "Last year (Control + left)",
                          "nextYear": "Next year (Control + right)",
                          "previousDecade": "Last decade",
                          "nextDecade": "Next decade",
                          "previousCentury": "Last century",
                          "nextCentury": "Next century",
                          "shortWeekDays": [t('Sun'), t('Mon'),  t('Tue'),  t('Wed'),  t('Thu'),  t('Fri'),  t('Sat')],
                        },
                        "timePickerLocale": {
                          "placeholder": "Select time"
                        },
                        "dateFormat": "YYYY-MM-DD",
                        "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
                        "weekFormat": "YYYY-wo",
                        "monthFormat": "YYYY-MM"
                      }
                    }
                  placeholder={t("Reservation time *")!}
                  format={'D/MM/YYYY - HH:mm'}
                />
                                                            {errors.reservationTime && <span className='error-msg'>{errors.reservationTime}</span>}
</div>
                                                {tripType === '0' && (
                                                    <>
                                                        <div className="col-md-4 form-group">
                                                            <input type="text" placeholder={t("Trip number *")} value={tripNumber} onChange={(e: any) => setTripNumber(e.target.value)} />
                                                            {errors.tripNumber && <span className='error-msg'>{errors.reservationType}</span>}

                                                        </div>
                                                        <div className="col-md-4 form-group">
                                                            <DatePicker
                                                                use12Hours={false}
                                                                style={{ width: '100%' }}
                                                                showTime
                  onChange={(v,date) => setArrivalHour(date as string)}
                  locale={
                    {
                      "lang": {
                        "locale": "ar_EG",
                        "placeholder": t("SelectDate"),
                        "rangePlaceholder": [t("StartDate"), t("EndDate")],
                        "today": t('Today'),
                        "now": t('Now'),
                          "backToToday": "Back to today",
                          "ok": t('OK3'),
                          "clear": "Clear",
                          "month": "Month",
                          "year": "Year",
                          "timeSelect": "Select time",
                          "dateSelect": "Select date",
                          "monthSelect": "Choose a month",
                          "yearSelect": "Choose a year",
                          "decadeSelect": "Choose a decade",
                          "yearFormat": "YYYY",
                          "dateFormat": "M/D/YYYY",
                          "dayFormat": "D",
                          "dateTimeFormat": "M/D/YYYY HH:mm:ss",
                          "monthFormat": "MM",
                          "monthBeforeYear": true,
                          "previousMonth": "Previous month (PageUp)",
                          "nextMonth": "Next month (PageDown)",
                          "previousYear": "Last year (Control + left)",
                          "nextYear": "Next year (Control + right)",
                          "previousDecade": "Last decade",
                          "nextDecade": "Next decade",
                          "previousCentury": "Last century",
                          "nextCentury": "Next century",
                          "shortWeekDays": [t('Sun'), t('Mon'),  t('Tue'),  t('Wed'),  t('Thu'),  t('Fri'),  t('Sat')],
                        },
                        "timePickerLocale": {
                          "placeholder": "Select time"
                        },
                        "dateFormat": "YYYY-MM-DD",
                        "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
                        "weekFormat": "YYYY-wo",
                        "monthFormat": "YYYY-MM"
                      }
                    }
                  placeholder={t("Arrival hour *")!}
                                                                format={'D/MM/YYYY - HH:mm'}
                                                                showNow={false}
                />
                                                            {errors.arrivalHour && <span className='error-msg'>{errors.arrivalHour}</span>}

                                                        </div>
                                                        <div className="col-md-4 form-group">
                                                            <input type="text" placeholder={t("Airlines name *")} value={airlinesName} onChange={(e: any) => setAirlinesName(e.target.value)} />
                                                            {errors.airlinesName && <span className='error-msg'>{errors.airlinesName}</span>}
                                                        </div>
                                                    </>
                                                )}
                                               
                                                {(reservationType === "2") && (
                                                    <>
                                                        <div className="col-md-4 form-group">
                                                            <textarea
                                                                rows={3}
                                                                placeholder={t("Source *")} value={source}
                                                                onClick={() => setOpenSourceModal(true)}
                                                                readOnly />
                                                            {errors.source && <span className='error-msg'>{errors.source}</span>}

                                                        </div>
                                                        <div className="col-md-4 form-group">
                                                            <textarea placeholder={t("Destination *")}
                                                                onClick={(e) => { e.preventDefault(); setOpenDestinationModal(true) }}
                                                                value={destination}
                                                                rows={3}
                                                                readOnly />
                                                            {errors.destination && <span className='error-msg'>{errors.destination}</span>}
                                                        </div>
                                                    </>
                                                )}
                                                {(reservationType === "0" || reservationType === "1") && (
                                                    <div className="col-md-4 form-group">
                                                        <textarea placeholder={t("Starting point *")} value={startingPoint}
                                                            rows={3}
                                                            onClick={() => setOpenStartingPointModal(true)}
                                                            readOnly />
                                                        {errors.startingPoint && <span className='error-msg'>{errors.startingPoint}</span>}

                                                    </div>
                                                )}
                                               
                                                {/* <div className="col-md-12 form-group">
                                                    <textarea name="message" id="message" cols={30} rows={4} placeholder="Message *" required></textarea>
                                            </div> */}
                                                <div className="col-md-12 mt-10">
                                                    <button type="submit" className="butn-dark2"><span>{t('Send Message')}</span></button>
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
            {openSourceModal ? (

                <Modal
                    centered
                    footer={<></>}
                    open={openSourceModal}
                    width={'100%'}
                    style={{
                        overflow: 'hidden',
                        padding: 0,
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                        height: 500
                    }}
                    onCancel={() => setOpenSourceModal(false)}
                >
           
                    <div style={{ width: '100%', height: 500 }}>
                        {MapContainer && <MapContainer
                            {...props}
                            style={{ width: '100%', height: '100%', borderRadius: 8 }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
                            />
                            {useMap && <BoundaryCanvas />}
                            <DraggableMarker position={sourcPosition} setPosition={setSourcePosition} />
                        </MapContainer>}
                    </div>
                </Modal>
            ) : null}

            
            <Modal
                centered
                footer={<></>}
                open={openDestinationModal}
                width={'100%'}
                style={{
                    overflow: 'hidden',
                    padding: 0,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                    height: 500
                }}
                onCancel={() => setOpenDestinationModal(false)}
            >
                {openDestinationModal ? (
                    <div style={{ width: '100%', height: 500 }}>
                        <MapContainer
                            {...props}
                            style={{ width: '100%', height: 500, borderRadius: 8 }}  >
                                                    
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
                            />
                            <BoundaryCanvas />
                            <DraggableMarker position={destinationPosition} setPosition={setDestinationPosition} />
                        </MapContainer>
                    </div>
                ) : null}
            </Modal>

            <Modal
                centered
                footer={<></>}
                open={openStartingPointModal}
                width={'100%'}
                style={{
                    overflow: 'hidden',
                    padding: 0,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                    height: 500
                }}
                onCancel={() => setOpenStartingPointModal(false)}
            >
                {openStartingPointModal ? (
                    <div style={{ width: '100%', height: 500 }}>
                        <MapContainer
                            {...props}
                            style={{ width: '100%', height: 500, borderRadius: 8 }}  >
                                                    
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
                            />
                            <BoundaryCanvas />
                            <DraggableMarker position={startingPointPosition} setPosition={setStartingPointPosition} />
                        </MapContainer>
                    </div>
                ) : null}
            </Modal>
        </section>
    );
}
