import Image from "next/image";
import Link from "next/link";
import {CategoryInterface} from "@/utils/typesAndInterfaces";

export default function ProductsCategory({image, link, text, color}:CategoryInterface) {

    return (
        <div className={`w-full group flex justify-center hover:bg-gradient-to-b from-transparent ${color} to-transparent`}>
            <Link href={`/produkty/${link}`} className='w-full flex flex-col items-center'>
                <Image src={`/assets/images/products/${image}.webp`} alt={link} width={200} height={200}
                       className='w-full h-full max-w-[200px] lg:max-w-[250px] object-contain group-hover:rotate-3 duration-300'/>
                <p className="text-center uppercase font-semibold text-lg lg:text-xl pt-1">{text}</p>
            </Link>
        </div>
    )
}