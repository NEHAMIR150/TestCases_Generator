import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { name, password } = await req.json();

    // Find user by name
    const user = await User.findOne({ name });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // ⚠️ This is plain-text check (not secure).
    // In real apps, use bcrypt.compare() with hashed passwords.
    if (user.password !== password) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // success
    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
