"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children, pageProps }) => {
    return <SessionProvider >{children}</SessionProvider>;
};