
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import cuento from "@/models/Cuento";

export const GET = async (request) => {
  try {
    await connectToDatabase();
    const cuentos = await cuento.find();
    
    return new NextResponse(JSON.stringify(cuentos), {status:200})
  } catch(error) {
    return new NextResponse('Error in fetching cuentos' + error, {status:500})
  }
}
