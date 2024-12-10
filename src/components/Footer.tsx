import Link from "next/link";
import Image from "next/image";
import CustomerService from "@/components/CustomerService";

export default function Footer() {

    return (
        <footer className='px-4 md:px-10 lg:px-0 bg-primary text-black flex flex-col lg:flex-row items-center justify-center py-4 md:py-10 lg:py-14'>
            <div className=' w-fit sm:w-full max-w-[1280px] flex flex-col sm:flex-row gap-6 md:gap-14 lg:gap-20 justify-center'>
                <div className='font-semibold uppercase flex flex-col md:flex-row justify-center gap-6 md:gap-14 lg:gap-20'>
                <div className='flex flex-col'>
                    <Link href="/">Produkty</Link>
                    <Link href="/">O nas</Link>
                    <Link href="/">Kontakt</Link>
                    <Link href="/">Produkty</Link>
                    <Link href="/">Cennik</Link>
                    <Link href="/">Złóż zamówienie</Link>
                </div>
                <div className='flex flex-col'>
                    <Link href="/">Woda źródlana</Link>
                    <Link href="/">Soki</Link>
                    <Link href="/">Napoje gazowane</Link>
                    <Link href="/">Napoje niegazowane</Link>
                    <Link href="/">Bogusie</Link>
                </div>
                </div>
                <div>
                    <p className='uppercase text-[17px] font-bold text-slate-900 pb-1'>Dział obsługi klienta</p>
                    <CustomerService icon="location" contactType="ul. Chopina 16, 32-020 Wieliczka"/>
                    <CustomerService icon="location" contactType="ul. Sołtysowska 37A, 31-589 Kraków"/>
                    <CustomerService icon="phone" contactType="12 352 32 23"/>
                    <CustomerService icon="phone" contactType="500 776 150"/>
                    <CustomerService icon="phone" contactType="500 776 494"/>
                    <CustomerService icon="email" contactType="syklykbis.biuro@gmail.com"/>
                    <CustomerService icon="email" contactType="syklykbis.krakow@gmail.com"/>
                    <CustomerService icon="email" contactType="preludium.sg@gmail.com"/>
                    <CustomerService icon="email" contactType="elixirium.am@gmail.com"/>
                    <CustomerService icon="time" contactType="elixirium.am@gmail.com"/>
                </div>
            </div>
        </footer>
    )
}