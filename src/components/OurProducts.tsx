"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import allProductsData from "@/app/data/allProducts";
//@ts-ignore
import {shuffle} from "lodash";
import Image from "next/image";
import {AllProductsInterface} from "@/app/data/allProducts";
import SectionHeader from "@/components/SectionHeader";
export default function OurProducts() {
    // const {data} = useQuery(GET_ALL_PRODUCTS);

    return (
        <div className="w-full flex justify-center">
            <div className="custom-paddings custom-container flex flex-col items-center pb-4 md:pb-10">
                <SectionHeader
                    icon="water"
                    title="Nasze produkty"
                />
                <Swiper
                    className="relative max-h-[90vh] w-full"
                    modules={[Autoplay]}
                    slidesPerView={screen.width > 768 ? 8 : 5}
                    autoplay={{delay: 1300}}
                    loop={true}
                    speed={500}
                >
                    {(allProductsData).map((item:AllProductsInterface) => (
                        <SwiperSlide key={item.id}>
                            <Image
                                src={`/assets/images/bottles/${item.bottle}.webp`}
                                // onClick={goToProducts}
                                alt={item.bottle}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className={`w-full object-cover cursor-pointer min-h-full`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}