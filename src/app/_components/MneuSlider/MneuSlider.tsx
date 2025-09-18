"use client"
import pic1 from "../../../../public/OIP.webp"
import pic2 from "../../../../public/OIP 2.webp"
import pic3 from "../../../../public/OIP 3.webp"
import pic4 from "../../../../public/OIP 4.jpg"
import pic5 from "../../../../public/OIP 5.png"
import pic6 from "../../../../public/insta-item2.jpg"
import pic7 from "../../../../public/insta-item3.jpg"
import pic8 from "../../../../public/post-item1.jpg"
import pic9 from "../../../../public/post-item2.jpg"

// import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image"
import { Button } from "@/components/ui/button"




export default function MneuSlider() {
  return (
    <div className='contianer w-[50%]  mx-auto p-6 my-6 relative'>
        <Swiper
        
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation,Autoplay]}
        autoplay={{delay:2000}}
        slidesPerView={1}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
        
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title " data-swiper-parallax="-300">
           <div className=" relative w-full h-[500px]">
<Image src={pic6} alt="test" fill className="w-full object-cover" ></Image>
            </div>
          </div>
       
        </SwiperSlide>
             <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <div className=" relative w-full h-[500px]">
<Image src={pic7} alt="test" fill className="w-full object-cover" ></Image>
            </div>
   
          </div>
       
        </SwiperSlide>

        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
         <div className=" relative w-full h-[500px]">
<Image src={pic8} alt="test" fill className="w-full object-cover" ></Image>
            </div>
          </div>
       
        </SwiperSlide>
                <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          <div className=" relative w-full h-[500px]">
<Image src={pic9} alt="test" fill className="w-full object-cover" ></Image>
            </div>
          </div>
       
        </SwiperSlide>
      </Swiper>
<div className=" absolute  start-[40px] top-[350px]  z-10">
  
  
  <Button className="bg-emerald-900 text-white text-2xl my-6 cursor-pointer "> show now</Button>
</div>

    </div>
  )
}
