
import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Cuento from "@/models/Cuento";
import creacion from "@/models/Creacion";

export const GET = async () => {
  try {
    await connectToDatabase();
    const cuentos = await Cuento.find();

    const headers = {
      "Access-Control-Allow-Origin": "https://magomezdev.tech/*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET", // Allow GET requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };

    return new NextResponse(JSON.stringify(cuentos), { status: 200, headers })
  } catch (error) {
    return new NextResponse('Error in fetching cuentos' + error, { status: 500 })
  }
}

export const POST = async (request) => {
  try {

    const cuentos = await request.json()

    await connectToDatabase();

    for (const cuento of cuentos) {

      // Create a new cuento instance using the received data
      const newCuento = new Cuento(cuento);
      // Save the new cuento to the database
      await newCuento.save();
    }

    const headers = {
      "Access-Control-Allow-Origin": "https://magomezdev.tech", // Allow requests from a specific origin
      "Access-Control-Allow-Methods": "POST", // Allow POST requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };

    return new NextResponse('Operation successful', { status: 201, headers });
  } catch (error) {
    return new NextResponse('Error in creating cuento' + error, { status: 500 });
  }
}

export const PUT = async (request) => {
  try {
    const Cuentos = await request.json();
    await connectToDatabase();
    // Create a new cuento instance using the received data
    const newCuento = new Cuento({});
    // Save the new cuento to the database
    await newCreacion.save();

    const headers = {
      "Access-Control-Allow-Origin": "https://magierredev.tech", // Allow requests from a specific origin
      "Access-Control-Allow-Methods": "PUT", // Allow POST requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };

    return new NextResponse('Feature not implemented', { status: 201, headers });
  } catch (error) {
    return new NextResponse('Error in creating cuento' + error, { status: 500 });
  }
}

export const DELETE = async (request) => {
  try {


    const headers = {
      "Access-Control-Allow-Origin": "https://magierredev.tech", // Allow requests from a specific origin
      "Access-Control-Allow-Methods": "DELETE", // Allow POST requests
      "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
    };

    return new NextResponse('Feature not implemented', { status: 201, headers });
  } catch (error) {
    return new NextResponse('Error in creating cuento' + error, { status: 500 });
  }
}