import { db } from '@/app/lib/prisma_db';
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { email, currentPassword, newPassword, confirmPassword, userId } = reqBody

        const getCurrentUser = await db.user.findUnique({
            where: { id: userId }
        })

        if (getCurrentUser && (await bcrypt.compare(currentPassword, getCurrentUser.password))) {
            if (newPassword === confirmPassword) {
                const hashedPassword = await bcrypt.hash(newPassword, 12);

                const updateUser = await db.user.update({
                    where: { id: userId },
                    data: {
                        email: email,
                        password: hashedPassword

                    }
                })
                if (updateUser) {
                    console.log("Good");

                    return new Response(JSON.stringify(updateUser), { status: 200, statusText: "User Successfully Updated" })
                }
            }
        }
        return new Response('Password Mismatch', { status: 400 })


    } catch (error) {
        console.log(error)
        return new Response('Error', { status: 400 })

    }
}
