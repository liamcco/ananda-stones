import { Stone } from "@/types/Stone";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// Fetch all stones
export async function getStones(): Promise<Stone[]> {
    const client = createClient(clientConfig);

    return client.fetch(
        groq`*[_type == "stone"]{
            _id,
            name,
            slug,
            subtitle,
            description,
            "image": image.asset->url,
            "palette": image.asset->metadata.palette,
            tags, 
            chakra, 
            element, 
            zodiac,
            month,
            instore
        }`
    )
}

// Fetch a single stone from slug
export async function getStone(slug: string): Promise<Stone> {
    const client = createClient(clientConfig);

    return client.fetch(
        groq`*[_type == "stone" && slug.current == $slug][0]{
            _id,
            name,
            slug,
            subtitle,
            description,
            "image": image.asset->url, 
            tags, 
            chakra, 
            element, 
            zodiac,
            month,
            instore
        }`,
        { slug }
    )
}