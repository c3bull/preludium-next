import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

export default function HomeOrderProducts() {

    return (
        <>
            <div className="w-full mt-2 flex flex-col items-center bg-gray-200 pb-16 shadow-inner">
                <SectionHeader icon='order' title='Złóż zamówienie'/>
                <div
                    className="w-full relative flex flex-row overflow-hidden border border-gray-400 bg-cover p-5 shadow-xl sm:max-w-[500px] md:max-w-full lg:max-w-[960px] xl:max-w-[1096px] 2xl:max-w-[1280px]">
                    <div
                        className="hidden h-auto w-96 bg-cover md:block"
                        style={{
                            backgroundImage: `url('/assets/images/order_bg_img.webp')`,
                        }}
                    >
                    </div>
                    <div className="flex flex-1 flex-col ">
                        <div className="flex flex-1 flex-col gap-2 text-lg uppercase">
                            <div className="flex justify-center p-2 ">
                                <Image
                                    src={`/assets/images/kontener.webp`}
                                    alt="kontener"
                                    width={220}
                                    height={220}
                                    className="h-auto w-48 bg-cover md:w-56"
                                />
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-center gap-2 text-black ">
                                <div>
                                    {[
                                        'kliknij "zamów"',
                                        'wybierz produkty',
                                        'uzupełnij formularz',
                                        'ciesz się produktami',
                                    ].map((line) => {
                                        return (
                                            <div key={line} className="w-auto">
                                                <div className="flex lg:text-md ml-1 text-xs leading-7 xl:text-lg">
                                                    <div className="inline-block pr-2 pt-0.5">
                                                        <Image
                                                            src={`/assets/images/icons/AiOutlineCheckCircle.webp`}
                                                            alt="checkout"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    </div>
                                                    <p className='mb-1'>{line}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center">
                            <button
                                type="button"
                                className="relative block w-full overflow-hidden border-2 border-primary py-3 font-bold no-underline md:mt-7 md:w-56 lg:mt-4 lg:w-72 xl:w-96"
                                // onClick={goToOrder}
                            >
              <span className="relative z-10 text-lg uppercase tracking-widest text-black">
                Zamów
              </span>
                                <div className="liquid"/>
                            </button>
                        </div>
                    </div>
                    <div
                        className="hidden h-auto w-96 bg-cover md:block"
                        style={{
                            backgroundImage: `url('/assets/images/order_bg_img.webp')`,
                        }}
                    />
                </div>
            </div>
        </>
    )
}