import { NextResponse, NextRequest } from "next/server";

import connectToDatabase from "@/lib/mongoose";
import Ticket from "@/models/ticket";

export async function GET(request: NextRequest) {
  await connectToDatabase();

  const tickets = await Ticket.find({});
  return Response.json(tickets);
}

export async function POST(request: NextRequest) {
  await connectToDatabase();

  const body = await request.json();

  try {
    const ticket = new Ticket({
      title: body.title,
      description: body.description,
      addedBy: body.addedBy,
      severity: body.severity,
    });

    const newTicket = await ticket.save();
    return NextResponse.json(
      {
        success: true,
        message: "Ticket created successfully",
        data: newTicket,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, status: 400 });
  }
}
