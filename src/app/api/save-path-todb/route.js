import { db } from "@/app/lib/prisma_db";
export async function POST(req) {
    try {

        const path = await req.json()
        const { fileName, filePath, fileType, userId } = path

        const newFile = await db.File.create({
            data: {
                filename: fileName,
                fileType,
                filePath,
                userId,
                //uploaderName:"Test2"
            }

        })
        if (newFile) {
            console.log("Good");
            return new Response(JSON.stringify(newFile), { status: 200, statusText: "Path Successfully Created" })
        }
    } catch (error) {
        console.log(error)
        return new Response('Invalid', { status: 400 })
    }
}
