import { db } from "@/app/lib/prisma_db";
import { revalidatePath } from "next/cache";
export async function POST(req) {
    try {

        const path = await req.json()
        const { fileName, filePath, fileRole, fileType, userId, uploaderName } = path
        const dateString = new Date()
        const dateObject = new Date(dateString)
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
                uploadDate: dateObject,
                User: {
                    connect: {
                        id: userId
                    }
                }
            }

        })

        const getUser = await db.user.findUnique({
            where: { id: userId }
        })

        console.log(getUser)



        const newActivity = await db.activity.create({
            data: {
                name: uploaderName,
                position: getUser.position,
                type: "UPLOADED A FILE",
                createdAt: dateObject,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
        if (newFile) {
            console.log("Good");

            revalidatePath('/dashboard/archiving')
            return new Response(JSON.stringify(newFile), { status: 200, statusText: "Path Successfully Created" })
        }
        return new Response(JSON.stringify(newActivity), { status: 200, statusText: "Activity Successfully Recorded" })

    }


    catch (error) {
        console.log(error)
        return new Response('Invalid', { status: 400 })
    }
}
