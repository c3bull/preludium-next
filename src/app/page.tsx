import Image from "next/image";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import OurProducts from "@/components/OurProducts";
import Footer from "@/components/Footer";
import HomeOrderProducts from "@/components/HomeOrderProducts";

export default function Home() {
    return (
        <div className="">
            <Navbar/>
            <Slider/>
            <OurProducts/>
            <HomeOrderProducts/>
            <Footer/>
        </div>
    );
}
