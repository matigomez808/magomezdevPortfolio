
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Creacion from "@/models/Creacion";

export const GET = async (request) => {

  const { author } = await request
  try {
    await connectToDatabase();
    const Creaciones = await Creacion.find({"author" : author });
    const headers = {
      "Access-Control-Allow-Origin": "https://magierredev.tech/*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET", // Allow GET requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };
    return new NextResponse(JSON.stringify(Creaciones), { status: 200, headers })
  } catch (error) {
    return new NextResponse('Error in fetching Creaciones' + error, { status: 500 })
  }
}