import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactWay from "@/components/ContactWay";
import Image from "next/image";

export default function ContactPage() {

    return (
        <>
            <Navbar/>
            <div className="min-w-[260px]">
                <div className="w-full flex flex-col items-center justify-center">
                    <div
                        className="py-4 md:py-8 lg:py-10 custom-paddings custom-container flex flex-col items-center pb-4 md:pb-10">
                        <p className='hidden text-center font-medium uppercase'>
                            Kliknij na odpowiednią ikonę, aby przejść do interesującej cię formy
                            kontaktu.
                        </p>
                        <div className='w-full flex flex-col gap-10'>
                            <ContactWay
                                title='Email'
                                name='preludium.sg@gmail.com'
                                href='mailto:preludium.sg@gmail.com'
                                name2='napojefantic.krakow@gmail.com'
                                href2='mailto:napojefantic.krakow@gmail.com'
                                name3='elixirium.am@gmail.com'
                                href3='mailto:elixirium.am@gmail.com'
                                icon={<Image
                                        src={`/assets/images/icons/MdOutgoingMail.webp`}
                                        alt="wyślij email"
                                        width={160}
                                        height={160}
                                        className="w-20 sm:w-28 lg:w-40"
                                    />
                                }
                                target='_blank'
                            />
                            <ContactWay
                                href='https://m.me/preludiumMessenger'
                                title='Messenger'
                                name='Preludium'
                                icon={<Image
                                    src={`/assets/images/icons/RiMessengerLine.webp`}
                                    alt="napisz na Messengerze"
                                    width={160}
                                    height={160}
                                    className="w-20 sm:w-28 lg:w-40"
                                />
                                }
                                target='_blank'
                            />
                            <ContactWay
                                title='Telefon'
                                name='12 352 32 23'
                                href='tel:123523223'
                                name2='500 776 150'
                                href2='tel:500776150'
                                name3='500 776 494'
                                href3='tel:500776494'
                                icon={
                                    <Image
                                        src={`/assets/images/icons/AiOutlinePhone.webp`}
                                        alt="zadzwoń"
                                        width={160}
                                        height={160}
                                        className="w-20 sm:w-28 lg:w-40"
                                    />
                                }
                            />
                        </div>
                        <div className='w-full flex justify-center py-16'>
                            <iframe
                                className='h-96 w-full rounded-lg'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1080.5939794471096!2d19.874785830109207!3d49.89692404645368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471668989840dea1%3A0xfb13def459554684!2sProducent%20Napoj%C3%B3w%20Fantic%20G%C3%B3rszczak!5e0!3m2!1spl!2spl!4v1648141991780!5m2!1spl!2spl'
                                title='lokalizacja'
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}