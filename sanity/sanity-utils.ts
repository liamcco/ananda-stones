import { Stone } from "@/types/Stone";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getStones(): Promise<Stone[]> {
    const client = createClient(clientConfig);

    return client.fetch(
        groq`*[_type == "stone"]{
            _id,
            name,
            description,
            tags, 
            "slug": slug.current, 
            "image": image.asset->url, 
            chakra, 
            element, 
            zodiac
        }`
    )
}

export async function getStone(slug: string): Promise<Stone> {
    const client = createClient(clientConfig);

    return client.fetch(
        groq`*[_type == "stone" && slug.current == $slug][0]{
            _id,
            name,
            description,
            tags, 
            "slug": slug.current, 
            "image": image.asset->url, 
            chakra, 
            element,
            zodiac
        }`,
        { slug }
    )
}