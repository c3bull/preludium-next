"use client"

import 'swiper/css';
import 'swiper/css/effect-fade';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade} from "swiper/modules";
import Image from "next/image";
export default function HomeSwiper() {
    return (
        <Swiper
            className="swiper--after relative max-h-[85vh] w-full"
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            autoplay={{ delay: 1500 }}
            loop={true}
            effect="fade"
            speed={1500}
        >
            {[1,2,3,4,5,6,7].map((item, index) => (
                <SwiperSlide key={index}>
                    <div className=" w-full bg-slate-900" >
                        <Image src={`/assets/images/slides/slide${item}.webp`}
                               alt={`slide${item}`}
                               width={0}
                               height={0}
                               sizes="100vw"
                               className={`w-full object-cover aspect-video max-h-[600px]`}
                        >
                        </Image>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}