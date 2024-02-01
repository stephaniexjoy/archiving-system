import { db } from "@/app/lib/prisma_db";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic"

export async function GET(req) {

    try {
        const searchParams = req.nextUrl.searchParams
        const query = searchParams.get('query')
        console.log(query)

        const res = await db.file.findMany({
            where: {

                filename: {
                    contains: query,
                    mode: 'insensitive'
                }

            }
        })



        console.log(res)
        return new Response(JSON.stringify(res), { status: 200, statusText: "Data Successfully Fetched" })
    } catch (err) {
        return new Response('Error', { status: 500, statusText: err })
    }
}