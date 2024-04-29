
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import cuento from "@/models/Cuento";

export const GET = async (request) => {
  try {
    await connectToDatabase();
    const cuentos = await cuento.find();
    const headers = {
      "Access-Control-Allow-Origin": "http://magomezdev.tech/*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET", // Allow GET requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };
    
    return new NextResponse(JSON.stringify(cuentos), {status:200, headers})
  } catch(error) {
    return new NextResponse('Error in fetching cuentos' + error, {status:500})
  }
}
