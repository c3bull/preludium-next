import {SectionHeaderInterface} from "@/utils/typesAndInterfaces";
import Image from "next/image";


export default function SectionHeader({title, icon}: SectionHeaderInterface) {

    const iconMap = {
        water: "IoWaterOutline",
        bubble: "RiBubbleChartLine",
        order: "RiShoppingBasket2Line"
    };

    const myIcon = iconMap[icon];

    return (
        <div className='w-full flex flex-col gap-2 lg:gap-5 items-center py-4 md:py-8 lg:py-10'>
            <Image
                src={`/assets/images/icons/${myIcon}.webp`}
                alt={title}
                width={60}
                height={60}
                className='w-[30px] h-[30px] md:h-[45px] md:w-[45px] lg:w-[60px] lg:h-[60px]'
            />
            <p className='text-center text-[16px] sm:text-[18px] lg:text-2xl uppercase font-semibold'>{title}</p>
        </div>
    )
}