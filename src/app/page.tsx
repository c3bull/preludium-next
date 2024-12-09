import Image from "next/image";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import OurProducts from "@/components/OurProducts";

export default function Home() {
    return (
        <div className="">
            <Navbar/>
            <Slider/>
            <OurProducts/>
        </div>
    );
}
