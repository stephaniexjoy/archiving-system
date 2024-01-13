import { db } from '@/app/lib/prisma_db';

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { addMaterial } = reqBody;
        console.log(addMaterial);

        if (!addMaterial) {
            return new Response('Missing Info', { status: 400 });
        }

        // Checks whether the Data is already exisiting

        const existingData = await db.materials.findUnique({
            where: { values: addMaterial }
        });

        if (existingData) {
            return new Response('Data is already registered', { status: 409 })
        }



        const newMaterial = await db.materials.create({
            data: {
                values: addMaterial,
                labels: addMaterial
            }
        })

        // Declare User for storing the data fetched from database

        if (newMaterial) {
            console.log("Good");
            return new Response(JSON.stringify(newMaterial), { status: 200, statusText: "Data Successfully Created" })
        }
    }
    catch (error) {
        console.log(error)
        return new Response('Invalid ', { status: 400 })
    }




}


export async function GET(req) {
    try {
        const getMaterials = await db.materials.findMany()

        if (!getMaterials) {
            return new Response('No data has been fetched', { status: 400 });
        }

        console.log(getMaterials)
        return new Response(JSON.stringify(getMaterials), { status: 200, statusText: "Materials Successfully Fetched" })
    } catch (error) {
        return new Response('Invalid ', { status: 400 })
    }
}