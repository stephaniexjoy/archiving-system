import { db } from "@/app/lib/prisma_db";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic"

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

        // revalidatePath("/dashboard/archiving")
        if (res.length === 0) {
            return new Response('No files found', { status: 404 })

        }



        //console.log(res)
        return new Response(JSON.stringify(res), { status: 200, statusText: "Data Successfully Fetched" })
    } catch (err) {
        return new Response('Error', { status: 500, statusText: err })
    }
}