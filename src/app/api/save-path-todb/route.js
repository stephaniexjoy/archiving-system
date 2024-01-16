import { db } from "@/app/lib/prisma_db";
export async function POST(req) {
    try {

        const path = await req.json()
        const { fileName, filePath, fileRole, fileType, userId, uploaderName } = path

        /*         const currentUser = await db.user.fi({
                    where: {
                        userId: userId,
                    },
                    include:{
                        User:true
                    }
                })
        
                console.log("Current User: ",currentUser)
         */

        const newFile = await db.File.create({
            data: {
                filename: fileName,
                fileType,
                filePath,

                uploaderName,
                fileRole,
                uploadDate: new Date(),
                User: {
                    connect: {
                        id: userId
                    }
                }
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
