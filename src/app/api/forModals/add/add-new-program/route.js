import { db } from '@/app/lib/prisma_db';

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { addProgram } = reqBody;
        console.log(addProgram);

        if (!addProgram) {
            return new Response('Missing Info', { status: 400 });
        }

        // Checks whether the Data is already exisiting

        const existingData = await db.programs.findUnique({
            where: { values: addProgram }
        });

        if (existingData) {
            return new Response('Data is already registered', { status: 409 })
        }



        const newPrograms = await db.programs.create({
            data: {
                values: addProgram,
                labels: addProgram
            }
        })

        // Declare User for storing the data fetched from database

        if (newPrograms) {
            console.log("Good");
            return new Response(JSON.stringify(newPrograms), { status: 200, statusText: "Data Successfully Created" })
        }
    }
    catch (error) {
        console.log(error)
        return new Response('Invalid ', { status: 400 })
    }




}


export async function GET(req) {
    try {
        const getPRograms = await db.programs.findMany()

        if (!getPRograms) {
            return new Response('No data has been fetched', { status: 400 });
        }

        console.log(getPRograms)
        return new Response(JSON.stringify(getPRograms), { status: 200, statusText: "Programs Successfully Fetched" })
    } catch (error) {
        return new Response('Invalid ', { status: 400 })
    }
}