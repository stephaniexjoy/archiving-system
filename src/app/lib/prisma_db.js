const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
    return new PrismaClient();
};

global.prisma = global.prisma ?? prismaClientSingleton();



if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export const db = global.prisma