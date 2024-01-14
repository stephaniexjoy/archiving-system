import { db } from '@/app/lib/prisma_db';
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const reqBody = await req.json();

        // Validate request body
        const { email, password } = reqBody;
        if (!email || !password) {
            return new Response('Missing Info', { status: 400 });
        }

        // Fetch user from the database
        const user = await db.user.findUnique({
            where: { email: reqBody.email },
        });

        if (user && (await bcrypt.compare(reqBody.password, user.password))) {
            console.log('Authentication successful');
            return new Response(JSON.stringify(user), {
                status: 200,
                statusText: 'User Successfully Signed In',
            });
        } else {
            console.log('Authentication failed');
            return new Response('Invalid Email or Password', { status: 401 });
        }
    } catch (error) {
        console.error('Error:', error);
        return new Response('Invalid Email or Password', { status: 401 });
    }
}
