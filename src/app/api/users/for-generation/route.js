import { db } from '@/app/lib/prisma_db';


export async function POST(req) {
    try {

        const reqBody = await req.json()
        console.log(reqBody)
        const { userId } = reqBody

        

        const user = await db.user.findMany({
            where: { id: userId }
        })

        console.log(user)

        if (user) {
            // Return a successful response with the user data
            return new Response(JSON.stringify(user), { status: 200, statusText: "User Successfully Fetched" });
        } else {
            // If user is not found, return a 404 response
            return new Response('User not found', { status: 404 });

        }
    }
    catch (error) {
        return new Response(error, { status: 400 })
    }

}