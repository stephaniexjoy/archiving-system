import { db } from '@/app/lib/prisma_db';


export async function GET(req) {

    const reqBody = await req.json()
    const { userId } = reqBody
    try {

        const user = await db.user.findUnique({
            where: { id: userId }
        })
        return new Response(JSON.stringify(user), { status: 200, statusText: "User Successfully Fetched" })
    } catch (error) {
        return new Response('Invalid Email or Password', { status: 400 })
    }

}