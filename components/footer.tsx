'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
        <div className="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-30 offset-md-1">
                            {/* <div className="sub-title border-footer-light whte">{t('ContactUs')}</div> */}
                        <div className="logo-wrapper">
          <Link className="logo mt-4 mb-3" href={'/'}>
            <Image src="/images/logo-white.png" className="logo-img" alt="" width={55} height={65} />
            <span>{t('Chffy')}</span>
                                </Link>
                                {/* <p>1616 Broadway NY, New York 10001
                                <br/>United States of America.
                            </p> */}
                                <p>{t('HeaderDesc')}</p>
        </div>
                        </div>
                    <div className="col-md-4 offset-md-1">
                        <div className="item">
                                <h3>{t('ContactUs')}</h3>
                                <p className="mail"><a dir="ltr" href="tel:0096503670676" target='_blank'>+966 50 367 0676</a></p>
                            <p className="mail"><a href='mailto:Contact@gulftravy.com' target='_blank'>Contact@gulftravy.com</a></p>
                                <div className="social mt-2">
                                    <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" /></svg>
                                </a>
                                    <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
                                    </a>
                                    <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fillRule="evenodd"/></svg>
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item">
                                <h3>{t('Services')}</h3>
                            <ul className="footer-explore-list list-unstyled">
                                    <li><a href="#services">{t('Service1')}</a></li>
                                    <li><a href="#services">{t('Service2')}</a></li>
                                    <li><a href="#services">{t('Service3')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                            <p>© {new Date().getFullYear()}{t('Chffy - All right reserved.')}</p>
                    </div>
                    {/* <div className="col-lg-8 col-md-6">
                        <p className="right"><a href="#">Terms &amp; Conditions</a></p>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>
    );
}
