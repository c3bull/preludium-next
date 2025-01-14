import {NextResponse} from "next/server";
import User from "../../../../models/user";
import {connectDB} from "../../../../utils/connectDB";

export async function POST() {
    try {
        await connectDB();
        const newUser = await User.create({
            username: 'test user',
            email: 'test@test.com',
        });

        return NextResponse.json(
            {user: newUser, message: 'successfully created user'},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {message: 'Internal Server Error', error},
            {status: 500}
        )
    }
}