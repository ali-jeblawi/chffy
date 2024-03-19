'use client';

import React, {  useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap} from 'react-leaflet'
import { useTranslation } from 'react-i18next';
import { Modal} from 'antd';

const Swal = require("sweetalert2/dist/sweetalert2.js");

const props={center:[ 24.69999996, 46.73333003], zoom: 13, scrollWheelZoom: false,draggable:true};

function DraggableMarker({position, setPosition}:any) {
    const [draggable, setDraggable] = useState(false);
    const markerRef = useRef(null)
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
 
    return (
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
    const [type, setType] = useState('-1');
    const [content, setContent] = useState('');
    const [isLoadingMap, setIsLoadingMap] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        content: ''
    });
    const [reservationType, setReservationType] = useState("-1");
    const [tripType, setTripType] = useState("-1");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [sourcPosition, setSourcePosition] = useState<any>(props.center)
    const [destinationPosition, setDestinationPosition] = useState<any>(props.center)
    const [openSourceModal, setOpenSourceModal] = useState<boolean>(false)
    const [openDestinationModal, setOpenDestinationModal] = useState<boolean>(false)

    const validateForm = () => {
        const _errors: any = {};
        const emailReqex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!name) _errors.name = t('ThisFieldIsMandatory');
        if (!email) _errors.email = t('ThisFieldIsMandatory');
        else if (email && !emailReqex.test(email)) _errors.email = t('ThisEmailIsInvalid');
        if (!phone) _errors.phone = t('ThisFieldIsMandatory');
        if (type === '-1') _errors.type = t('ThisFieldIsMandatory');
        if (!content) _errors.content = t('ThisFieldIsMandatory');

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
                                    <div className="icon"><span className="flaticon-call"></span></div>
                                    <div className="text">
                                        <p>Phone Reservation</p> <a href="tel:855-100-4444">+966 57 458 4023</a>
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
                                                    <input name="name" type="text" placeholder="Your Name *" required />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <input name="email" type="email" placeholder="Your Email *" required />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <input name="phone" type="text" placeholder="Your Phone *" required />
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <select name="tripType" value={tripType} onChange={(e: any) => setTripType(e.target.value)}>
                                                        <option selected disabled value={'-1'}>Trip type *</option>
                                                        <option value={'0'}>Airport</option>
                                                        <option value={'1'}>Other</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4 form-group">
                                                    <select name="reservationType" value={reservationType} onChange={(e: any) => setReservationType(e.target.value)} >
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
                                                            <input name="tripNumber" type="text" placeholder="Trip number *" required />
                                                        </div>
                                                        <div className="col-md-4 form-group">
                                                            <input name="arrivalHour" type="text" placeholder="Arrival hour *" required />
                                                        </div>
                                                        <div className="col-md-4 form-group">
                                                            <input name="airlinesName" type="text" placeholder="Airlines name *" required />
                                                        </div>
                                                    </>
                                                )}
                                               
                                                {(reservationType === "2") && (
                                                    <>
                                                        <div className="col-md-4 form-group">
                                                            <input name="source" type="text" placeholder="Source *" value={source}
                                                                onClick={() => setOpenSourceModal(true)}
                                                                readOnly />
                                                        </div>
                                                        <div className="col-md-4 form-group">
                                                            <input name="destination" type="text" placeholder="Destination *"
                                                                onClick={(e) => { e.preventDefault();  setOpenDestinationModal(true) }}
                                                                value={destination}
                                                            readOnly/>
                                                        </div>
                                                    </>
                                                )}
                                                {(reservationType === "0" || reservationType === "1") && (
                                                    <div className="col-md-4 form-group">
                                                        <input name="startingPoint" type="text" placeholder="Starting point *" required />
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
            {openSourceModal ? (

                <Modal
                    centered
                    footer={<></>}
                    open={openSourceModal}
                    width={'100%'}
                    style={{
                        overflow: 'hidden',
                        padding:0,
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                        height: 500
                    }}
                    onCancel={() => setOpenSourceModal(false)}
                >
           
                    <div style={{ width: '100%', height: 500 }}>
                        <MapContainer
                            {...props}
                            style={{ width: '100%', height: '100%', borderRadius: 8 }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
                            />
                            <BoundaryCanvas/>
                            <DraggableMarker position={sourcPosition} setPosition={setSourcePosition} />
                        </MapContainer>
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
                    padding:0,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                    height:500
                }}
                onCancel={() => setOpenDestinationModal(false)}
            >
                {openDestinationModal ? (
                    <div  style={{ width: '100%' ,height:500}}>
                        <MapContainer
                            {...props}
                            style={{ width: '100%',height:500, borderRadius: 8 }}  >
                                                    
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
                            />
                                                        <BoundaryCanvas/>
                            <DraggableMarker position={destinationPosition} setPosition={setDestinationPosition} />
                        </MapContainer>
                    </div>
                ) : null}
            </Modal>
        </section>
    );
}
