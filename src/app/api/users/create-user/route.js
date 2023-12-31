import { db } from '@/app/lib/prisma_db';
import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { name, email, password, position, designation, specialization, license } = reqBody;
        console.log(reqBody);

        if (!name || !email || !password || !position || !designation || !specialization || !license) {
            return new Response('Missing Info', { status: 400 });
        }

        // Checks whether the email is already exisiting

        const existingUser = await db.user.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            return new Response('Email is already registered', { status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await db.user.create({
            data: {
                name,
                email,
                password,
                position,
                designation,
                specialization,
                license
            }
        })

        // Declare User for storing the data fetched from database
        let user;

        // Use position to find the user in database 
        switch (position) {
            case 'faculty':
                // Prisma Functions to find the user in database 
                break;
            case 'secretary':
                // Prisma Functions to find the user in database 
                break;
            case 'superadmin':
                // Prisma Functions to find the user in database 
                break;
            default:
                break;
        }

        if (user && (await bcrypt.compare(reqBody.password, user.hashedPassword))) {
            console.log("Good");
            return new Response(JSON.stringify(user), { status: 200, statusText: "User Successfully Created" })
        } else {
            return new Response('Invalid Email or Password', { status: 401 })
        }
    }
    catch (error) {
        console.log(error)
        return new Response('Invalid Email or Password', { status: 200 })
    }




}
