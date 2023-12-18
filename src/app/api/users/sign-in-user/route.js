import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { email, password, position } = reqBody;
        console.log(reqBody);

        if (!email || !password || !position) {
            return new Response('Missing Info', { status: 400 });
        }

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
            return new Response(JSON.stringify(user), { status: 200, statusText: "User Successfully Signed In" })
        } else {
            return new Response('Invalid Email or Password', { status: 401 })
        }
    }
    catch (error) {

    }


    return new Response('Invalid Email or Password', { status: 200 })

}