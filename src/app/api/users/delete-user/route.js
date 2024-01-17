import { db } from '@/app/lib/prisma_db';
import bcrypt from 'bcrypt'
import { revalidatePath } from 'next/cache';

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { userId, sessionUserId, sessionUserName, sessionUserPosition } = reqBody
        console.log(reqBody);
        const dateString = new Date()
        const dateObject = new Date(dateString)

        const user = await db.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            return new Response('No User Found', { status: 404 })
        }

        await db.user.delete({
            where: {
                id: userId,
            },
        });

        console.log(`User with id ${userId} deleted successfully`);

        const newActivity = await db.activity.create({
            data: {
                name: sessionUserName,
                position: sessionUserPosition,
                type: "DELETED A USER",
                createdAt: dateObject,
                user: {
                    connect: {
                        id: sessionUserId
                    }
                }
            }
        })

        console.log(newActivity)



        revalidatePath('/superadmin/dashboard/manageuser')
        return new Response("Success", { status: 200, statusText: "User Successfully Deleted" })
    }

    catch (error) {
        console.log(error)
        return new Response('Invalid Email or Password', { status: 400 })
    }




}
