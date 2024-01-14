import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import bcrypt from 'bcrypt'
import { db } from '@/app/lib/prisma_db';

export const AuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60
    },



    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter your Email" },
                password: { label: "Password", type: "password", placeholder: "Enter your Password" },
                userRole: { label: "Role", type: "radio", options: [{ value: "faculty", label: "Faculty" }, { value: "student", label: "Student" }] }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const reqBody = await req
                //console.log("Test: ", reqBody.body)

                //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                try {
                    const response = await axios.post("http://localhost:3000/api/users/sign-in-user", {
                        email: credentials?.email,
                        password: credentials?.password,

                    }, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })

                    const user = await response.data


                    if (user) {
                        // Any object returned will be saved in `user` property of the JWT
                        //console.log("Inserting Token: ", user)
                        return user
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null

                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
    pages: {
        signIn: "/",
        signOut: "/",

    },
    callbacks: {

        async jwt({ token, user }) {

            if (user) {
                console.log("token: ", user, token)
                token.position = user.position
                token.designation = user.designation
                token.specialization = user.specialization
                token.license = user.license


            }

            //console.log('new token: ', token)
            return token

        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token and user id from a provider.
            //console.log('I am in session')
            session.user.id = token.id
            session.user.position = token.position
            session.user.designation = token.designation
            session.user.specialization = token.specialization
            session.user.license = token.license
            //console.log("Session Data: ",session)

            return session
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs

            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) {

                return url
            }
            return baseUrl
        },

    },
    secret: process.env.NEXTAUTH_SECRET
}