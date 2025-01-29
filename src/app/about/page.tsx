import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {

    return (
        <>
            <Navbar/>
            <div className="min-w-[260px]">
                <div className="w-full flex justify-center">
                    <div className="py-4 md:py-8 lg:py-10 custom-paddings custom-container flex flex-col items-center pb-4 md:pb-10">
                        <p className="pb-12 text-left text-sm sm:text-[16px] md:text-lg drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]">
                            Nasza firma oferuje dostawy pełnego asortymentu produktów firmy <b>Fantic</b> -
                            uznanego
                            producenta - rodzinnej firmy istniejącej od
                            1957 roku.
                            Obsługujemy zarówno odbiorców hurtowych jak i
                            detalicznych. Zapewniamy dostawy na potrzeby dużych imprez
                            plenerowych jak i okolicznościowych spotkań rodzinnych. Szeroka
                            oferta naszych produktów z pewnością zadowoli nawet najbardziej
                            wymagających odbiorców!
                        </p>
                        <div className='flex flex-col sm:flex-row gap-10'>
                            <Image
                                src={`/assets/images/Fantic-logo.webp`}
                                alt="fantic logo"
                                width={250}
                                height={250}
                                className="flex h-auto w-48 md:w-64 self-center"
                            />
                            <Image
                                src={`/assets/images/elixirium.webp`}
                                alt="fantic logo"
                                width={250}
                                height={250}
                                className="flex h-auto w-48 md:w-64 self-center"
                            />
                        </div>
                        <p className="py-10 text-sm sm:text-[16px] md:text-lg">Jakość i smak naszą dewizą od lat!</p>
                        <div className="flex flex-row items-center justify-center gap-6">
                            <Image
                                src={`/assets/images/recyclable.webp`}
                                alt="recyclable logo"
                                width={120}
                                height={120}
                                className="aspect-square h-auto w-28"
                            />
                            <Image
                                src={`/assets/images/polski_producent.webp`}
                                alt="polski producent"
                                width={120}
                                height={120}
                                className="aspect-square h-auto w-28"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}