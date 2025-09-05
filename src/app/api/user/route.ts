import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectToDatabase();
  const users = await User.find();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const body = await req.json();
  console.log("Received user:", body);

  const { name, email, password } = body;

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ message: "User already exists" }, { status: 409 });
  }

  const newUser = await User.create({ name, email, password });
  return NextResponse.json(newUser, { status: 201 });
}
