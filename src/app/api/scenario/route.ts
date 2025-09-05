import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Scenario from "@/models/Scenario";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const { userId, scenario_text, status, reminded } = await req.json();

    // Create new scenario
    const newScenario = await Scenario.create({
      userId,
      scenario_text,
      status: status ?? 0,
      reminded: reminded ?? false,
      date_submitted: new Date(),
      processedAt: new Date(),
      __v: 0,
    });

    return NextResponse.json(newScenario, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const scenarios = await Scenario.find({});
    return NextResponse.json(scenarios, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
