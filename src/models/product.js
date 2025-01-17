import mongoose, {Schema, models} from "mongoose";

const productSchema = new mongoose.Schema({
        number: Number,
        bottle: String,
        name: String,
        tableLabels: {
            wartoscOdzywcza: String,
            wartoscEnergetyczna: String,
            tluszcz: String,
            wTymKwasyNasycone: String,
            weglowodany: String,
            wTymCukry: String,
            bialko: String,
            sol: String,
            witaminaC: String,
        },
        tableValues: {
            wartoscOdzywcza: String,
            wartoscEnergetyczna: String,
            tluszcz: String,
            wTymKwasyNasycone: String,
            weglowodany: String,
            wTymCukry: String,
            bialko: String,
            sol: String,
            witaminaC: String,
        },
        category: String,
        price: Number,
        netPrice: Number,
        vat: Number,
        hint: String,
    },
    {
        collection: 'product'
    }
)

const ProductModel = mongoose.models.product || mongoose.model("product", productSchema);
export default ProductModel;