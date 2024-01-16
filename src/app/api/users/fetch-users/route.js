import { db } from "@/app/lib/prisma_db";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic"

export async function GET(req) {

    try {

        const res = await db.user.findMany({

        });

        if (res.length === 0) {
            return new Response('No Users found', { status: 404 })

        }



        console.log(res)
        return new Response(JSON.stringify(res), { status: 200, statusText: "Data Successfully Fetched" })
    } catch (err) {
        return new Response('Error', { status: 500, statusText: err })
    }
}