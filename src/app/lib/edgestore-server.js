import { initEdgeStore } from '@edgestore/server';
import {
    createEdgeStoreNextHandler,
} from '@edgestore/server/adapters/next/app';
import { initEdgeStoreClient } from '@edgestore/server/core';
import { z } from 'zod';



function createContext(_opts) {
    return {
        userId: '123',
        userRole: 'admin',
    };
}

const es = initEdgeStore.create();

/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
    publicFiles1: es
        .fileBucket()

    ,
    publicImages: es.imageBucket({
        accept: ['image/jpeg', 'image/png', 'image/jpg']
    })

    /*  .input(z.object({ type: z.enum(['post', 'article']) })) */
    /* .path(({ ctx, input }) => [{ type: input.type }, { author: ctx.userId }])
    .metadata(({ ctx }) => ({
        role: ctx.userRole,
    }))
    .beforeUpload(({ ctx, input, fileInfo }) => {
        // forbid 50% of the time (for demo purposes)
        return Math.random() < 0.5;
    })
    .beforeDelete(({ ctx, fileInfo }) => {
        // forbid 50% of the time (for demo purposes)
        return Math.random() < 0.5;
    }), */
});

export const handler = createEdgeStoreNextHandler({
    router: edgeStoreRouter,
    //createContext,
});

/**
 * This type is used to create the type-safe client for the frontend.
 */

export const backendClient = initEdgeStoreClient({
    router: edgeStoreRouter,
});