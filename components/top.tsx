'use client';

import Image from 'next/image';
import React, { useEffect } from 'react'

export default function Top() {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if(window)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if(window)
        window.addEventListener("scroll", showElemOnScroll);
        return function cleanup() {
            window?.removeEventListener("scroll", showElemOnScroll);
        };
      
    }, // eslint-disable-next-line
        []);
    
    const showElemOnScroll = function () {
        if (window && window.scrollY > 100) {
            document.querySelector(".navbar")?.classList.add("header-fixed");
            document.querySelector(".back-top")?.classList.add("d-flex");
            document.querySelector(".back-top")?.classList.remove("d-none");
        } else {
            document.querySelector(".navbar")?.classList.remove("header-fixed");
            document.querySelector(".back-top")?.classList.remove("d-flex");
            document.querySelector(".back-top")?.classList.add("d-none");
        }
    }

  return (
      <span onClick={handleScroll} className="return-to-top back-top d-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
              <path fill="none" stroke="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 328l144-144 144 144" /></svg>
    </span>
  )
}
