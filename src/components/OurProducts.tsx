"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import allProductsData from "@/app/data/allProducts";
//@ts-ignore
import {shuffle} from "lodash";
import Image from "next/image";
import {AllProductsInterface} from "@/app/data/allProducts";
export default function OurProducts() {
    // const {data} = useQuery(GET_ALL_PRODUCTS);

    return (
        <div className="m-0 flex justify-center">
            <div className="flex w-2/3 flex-col items-center pb-10">
                {/*<SectionHeader*/}
                {/*    icon={<img*/}
                {/*        src={imageUrl('icons/IoWaterOutline.webp')}*/}
                {/*        width='50px'*/}
                {/*        height='50px'*/}
                {/*        alt='nasze produkty'*/}
                {/*    />}>*/}
                {/*    Nasze Produkty*/}
                {/*</SectionHeader>*/}
                <Swiper
                    className="relative max-h-[90vh] w-full"
                    modules={[Autoplay]}
                    slidesPerView={8}
                    autoplay={{delay: 1300}}
                    loop={true}
                    speed={500}
                >
                    {shuffle(allProductsData).map((item:AllProductsInterface) => (
                        <SwiperSlide key={item.id}>
                            <Image
                                src={`/assets/images/bottles/${item.bottle}.webp`}
                                // onClick={goToProducts}
                                alt={item.bottle}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className={`w-full object-cover cursor-pointer`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}