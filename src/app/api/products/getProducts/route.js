import {NextResponse} from "next/server";
import ProductModel from "../../../../models/product";
import {connectDB} from "../../../../utils/connectDB";

export async function GET() {
    try {
        await connectDB();
        const allProducts = await ProductModel.aggregate([{ $sample: { size: 38 } }]);
        return NextResponse.json({success: true, data: allProducts});
    } catch (error) {
        // Obsługa błędu i zwrócenie odpowiedniego komunikatu
        return NextResponse.json(
            { message: 'Internal Server Error', error: error.message },
            { status: 500 }
        );
    }
}