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
        <div className='w-full flex flex-col gap-5 items-center py-10'>
            <Image
                src={`/assets/images/icons/${myIcon}.webp`}
                alt={title}
                width={60}
                height={60}
            />
            <p className='text-2xl uppercase font-semibold'>{title}</p>
        </div>
    )
}