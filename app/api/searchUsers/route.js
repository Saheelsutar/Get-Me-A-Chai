import { NextResponse } from 'next/server';
import connectDB from '@/db/connectDb';
import User from '@/models/User';

export async function GET(req) {
    try {
        await connectDB();
        const { search } = Object.fromEntries(new URL(req.url).searchParams);

        if (!search) {
            return NextResponse.json({ users: [] }, { status: 200 });
        }

        // MongoDB query to find users whose username starts with search text (case-insensitive)
        const users = await User.find({
            username: { $regex: `^${search}`, $options: 'i' }, 
            name: { $exists: true, $ne: "" }  // Ensures `name` is not empty or undefined
          }).limit(10);
        return NextResponse.json({ users }, { status: 200 });

    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
}
