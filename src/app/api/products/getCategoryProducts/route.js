import {NextResponse} from "next/server";
import ProductModel from "../../../../models/product";
import {connectDB} from "../../../../utils/connectDB";

export async function GET(req) {
    try {
        const url = new URL(req.url); // Parsowanie URL
        const category = url.searchParams.get('category');
        console.log('url ', url)
        console.log('categ ', category)
        await connectDB();
        // const allCategoryProducts = await ProductModel.find({ category: "non_carb_drink" });
        const allCategoryProducts = await ProductModel.find({ category: category });
        return NextResponse.json({success: true, data: allCategoryProducts});
    } catch (error) {
        // Obsługa błędu i zwrócenie odpowiedniego komunikatu
        return NextResponse.json(
            { message: 'Internal Server Error', error: error.message },
            { status: 500 }
        );
    }
}