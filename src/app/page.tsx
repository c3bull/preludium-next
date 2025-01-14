import Image from "next/image";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import OurProducts from "@/components/OurProducts";
import Footer from "@/components/Footer";
import HomeOrderProducts from "@/components/HomeOrderProducts";

// const response = await fetch(`http://localhost:3000/api/users/create`, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         username: 'test user',
//         email: 'test@test.com',
//     })
// });
//
// const data = await response.json();
// console.log(data);

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
