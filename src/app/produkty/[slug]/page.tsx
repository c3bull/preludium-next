"use client"
import Navbar from "@/components/Navbar";
import ProductsCategory from "@/components/ProductsCategory";
import Footer from "@/components/Footer";
import {getParams} from "next/dist/export/helpers/get-params";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import product from "@/models/product";
import SingleProduct from "@/components/SingleProduct";

async function getCategoryProducts(category) {
    let response = await fetch(`http://localhost:3000/api/products/getCategoryProducts?category=${category}`, {
        cache: 'no-store'
    })

    response = await response.json()
    return response
}

export default function ProductsCat() {
    const [products, setProducts] = useState([]);
    const pathname  = usePathname()
    // console.log(myLink)
    const linkMap = {
        'napoje-niegazowane': "non_carb_drink",
        'soki-i-nektary': "juices",
        'herbaty': "tea",
        'napoje-gazowane': "carb_drink",
        'woda': "water",
        'bogusie': "bogus",
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const category = pathname && pathname.split("/").pop(); // Wyciągnij kategorię z URL

            const response = await fetch(`/api/products/getCategoryProducts?category=${linkMap[category]}`);
            const data = await response.json();
            console.log('data ', data.data)
            setProducts(data.data);
            console.log('products ', products)
        };

        fetchProducts();
    }, [pathname]);

    // const myIcon = linkMap[icon];

    // const categoryProducts = await getCategoryProducts("non_carb_drink")

    // console.log(categoryProducts)

    return (
        <>
            <Navbar/>
            <div className="min-w-[260px]">
                <div className="py-8 md:py-10 lg:py-16 w-full flex justify-center">
                    <div className="custom-paddings custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center pb-4 md:pb-10 gap-10 md:gap-6 lg:gap-10">
                        {products && products.map(product => (
                            <SingleProduct link="napoje-niegazowane" image={product.bottle} text={product.name} color="via-amber-200/80"/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}