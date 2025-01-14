import mongoose, {Schema, models} from "mongoose";
const UserSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    }
})

const User = models.User || mongoose.model("User", UserSchema);
export default User;