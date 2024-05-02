
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import cuento from "@/models/Cuento";
import creacion from "@/models/Creacion";

export const GET = async () => {
  try {
    await connectToDatabase();
    const cuentos = await cuento.find();
    
    const headers = {
      "Access-Control-Allow-Origin": "https://magomezdev.tech/*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET", // Allow GET requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };
    
    return new NextResponse(JSON.stringify(cuentos), {status:200, headers})
  } catch(error) {
    return new NextResponse('Error in fetching cuentos' + error, {status:500})
  }
}

export const POST = async (request) => {
  try {
    const { story, author, timestamp, originalStory } = await request.json();
    await connectToDatabase();
    // Create a new cuento instance using the received data
    const newCreacion = new creacion({ story, author });
    // Save the new cuento to the database
    await newCreacion.save();
    
    const headers = {
      "Access-Control-Allow-Origin": "https://magomezdev.tech", // Allow requests from a specific origin
      "Access-Control-Allow-Methods": "POST", // Allow POST requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };
    
    return new NextResponse('Cuento created successfully', {status: 201, headers});
  } catch(error) {
    return new NextResponse('Error in creating cuento' + error, {status: 500});
  }
}