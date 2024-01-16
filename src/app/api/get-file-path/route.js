import { db } from "@/app/lib/prisma_db";

//export const dynamic = "force-dynamic"

export async function GET(req) {

    try {
    
        const res = await db.file.findMany({
            select: {
                filePath: true,
                filename: true,
                uploadDate: true,
                uploaderName: true,
                fileRole: true
            }
        });


        console.log(res)
        return new Response(JSON.stringify(res), { status: 200, statusText: "Data Successfully Fetched" })
    } catch (err) {
        return new Response('Error', { status: 500, statusText: err })
    }
}