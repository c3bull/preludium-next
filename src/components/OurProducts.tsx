"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import Image from "next/image";
import {AllProductsInterface} from "@/app/data/allProducts";
import SectionHeader from "@/components/SectionHeader";
import {useEffect, useState} from "react";

export default function OurProducts({allProducts}:any) {
    // const {data} = useQuery(GET_ALL_PRODUCTS);
    const [products, setProducts] = useState(5)
    console.log(allProducts)
    useEffect(() => {
        slidesAmount()
    }, []);

    const slidesAmount = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth > 768) {
                setProducts(8);
            } else {
                setProducts(5);
            }
        }
    }

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
                    slidesPerView={products ? products : 5}
                    autoplay={{delay: 1300}}
                    loop={true}
                    speed={500}
                >
                    {(allProducts.data).map((item: AllProductsInterface) => (
                        <SwiperSlide key={item.number}>
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

// export async function getServerSideProps(context) {
//     const data = await fetch('https://api.example.com/data');
//
//     return {
//         props: {
//             data,
//         },
//     };
// }