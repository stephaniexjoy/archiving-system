import { backendClient } from "@/app/lib/edgestore-server";
export async function GET(req) {

    try {
        const res = await backendClient.publicFiles.listFiles();


        console.log(res)
        return new Response(JSON.stringify(res), { status: 200, statusText: "User Successfully Created" })
    } catch (err) {
        return new Response('Error', { status: 500, statusText: err })
    }
}