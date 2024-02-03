import { db } from '@/app/lib/prisma_db';
import bcrypt from 'bcrypt'
import { revalidatePath } from 'next/cache';

export async function POST(req) {

    try {
        const reqBody = await req.json();
        const { email, password, name, position, designation, specialization, license, age, sex, employee_no } = reqBody;
        console.log(reqBody);

        if (!name || !email || !password || !position || !designation || !specialization || !license || !age || !sex || !employee_no) {
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
                password: hashedPassword,
                position,
                designation,
                specialization,
                license,
                age,
                sex,
                employee_no,
            }
        })

        // Declare User for storing the data fetched from database

        if (newUser) {
            console.log("Good");
            revalidatePath('/superadmin/dashboard/manageuser')
            return new Response(JSON.stringify(newUser), { status: 200, statusText: "User Successfully Created" })
        }
    }
    catch (error) {
        console.log(error)
        return new Response('Invalid Email or Password', { status: 400 })
    }




}
