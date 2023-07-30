import { Stone } from "@/types/Stone";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// Fetch all stones
export async function getStones(): Promise<Stone[]> {
    const client = createClient(clientConfig);

    const stones = client.fetch(
        groq`*[_type == "stone"]{
            _id,
            name,
            slug,
            subtitle,
            description,
            "image": image.asset->url,
            "metadata": image.asset->metadata,
            tags, 
            chakra, 
            element, 
            zodiac,
            month,
            instore
        }`
    )

    return stones
}