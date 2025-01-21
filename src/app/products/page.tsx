import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsCategory from "@/components/ProductsCategory";

export default function Products() {
    return (
        <>
            <Navbar/>
            <div className="min-w-[260px]">
                <div className="py-8 md:py-10 lg:py-16 w-full flex justify-center">
                    <div className="custom-paddings custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center pb-4 md:pb-10 gap-10 md:gap-6 lg:gap-10">
                        <ProductsCategory link="napoje-niegazowane" image="products_niegazowane" text="Napoje niegazowane" color="via-amber-200/80"/>
                        <ProductsCategory link="soki-i-nektary" image="products_soki_nektary" text="Soki i nektary" color="via-amber-500/60" />
                        <ProductsCategory link="herbaty" image="products_herbaty" text="Herbaty" color="via-amber-900/90" />
                        <ProductsCategory link="napoje-gazowane" image="products_gazowane" text="Napoje gazowane" color='via-orange-400/70'/>
                        <ProductsCategory link="woda" image="products_wody" text="Woda" color='via-cyan-300/60'/>
                        <ProductsCategory link="bogusie" image="products_bogusie" text="Bogusie" color='via-orange-500/60'/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
