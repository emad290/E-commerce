"use client"


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';
import { CatType } from '@/Types/Categoroy.Types';
import Image from 'next/image';



export default function MainSlider({data} : {data : CatType[]}) {
    
  return (
    <div className='contianer w-[80%] mx-auto p-6 my-12'>
    <Swiper
        spaceBetween={30}
        slidesPerView={5}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation,Autoplay]}
         autoplay={{delay:1000}}
        className="mySwiper"
      >

        {data.map((cat :CatType)=>  <SwiperSlide key={cat._id} data-hash="slide1">
          <div className=' relative w-full h-[200px]'>
 <Image src={cat.image} alt="test" className='w-full object-contain' fill  />
          </div>
           
            <h1 className='text-center text-2xl text-emerald-700 font-semibold'>{cat.name}</h1>
            </SwiperSlide>)}
      
       
  
      </Swiper>
    </div>
  )
}
