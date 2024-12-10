import Image from "next/image";

interface CustomerServiceInterface {
    icon: Icon,
    contactType: string,
}

type Icon = "location" | "email" | "phone" | "time";


export default function CustomerService({icon, contactType}: CustomerServiceInterface) {

    const iconMap = {
        location: "ImLocation",
        email: "IoMdMail",
        phone: "AiFillPhone",
        time: "MdOutlineAccessTimeFilled",
    };

    const myIcon = iconMap[icon];

    return (
        <div className='flex items-center gap-2'>
            <Image
                src={`/assets/images/icons/${myIcon}.webp`}
                alt={contactType}
                width={20}
                height={20}
            />
            <p>{contactType}</p>
        </div>
    )
}