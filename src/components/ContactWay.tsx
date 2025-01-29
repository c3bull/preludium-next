import {ContactWayInterface} from "@/utils/typesAndInterfaces";

export default function ContactWays({
                                        href,
                                        name,
                                        title,
                                        icon,
                                        name2,
                                        name3,
                                        target,
                                        href2,
                                        href3
                                    }: ContactWayInterface) {
    return (
        <article>
            <div className='flex w-full items-center'>
                <div className='h-[1px] w-full to-primary from-transparent bg-gradient-to-r'/>
                <a href={href} target={target} rel='noreferrer'
                   className='hover:bg-[#2a0069] duration-200 rounded-full mx-2 bg-[#5500d3] p-2 sm:p-3 lg:p-5 w-20 sm:w-28 lg:w-32 aspect-square flex items-center justify-center'>
                    {icon}
                </a>
                <div className='h-[1px] w-full to-primary from-transparent bg-gradient-to-l'/>
            </div>
            <div className='text-center flex flex-col justify-center items-center'>
                <h4 className="px-2 font-semibold uppercase text-gray-800">{title}</h4>
                <a href={href} className="hover:underline w-fit font-medium" target={target}>{name}</a>
                <a href={href2} className="hover:underline w-fit font-medium" target={target}>{name2}</a>
                <a href={href3} className="hover:underline w-fit font-medium" target={target}>{name3}</a>
            </div>
        </article>
    );
}
