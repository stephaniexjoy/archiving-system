import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import bcrypt from 'bcrypt'
import { db } from '@/app/lib/prisma_db';
import { AuthOptions } from "./options";


const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };