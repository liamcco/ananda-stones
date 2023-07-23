import { createClient, groq } from "next-sanity";


export async function getStones() {
    const client = createClient({
        projectId: "6l1wyfou",
        dataset: "production",
        apiVersion: "2023-07-23"
    });

    return client.fetch(
        groq`*[_type == "stone"]{
            _id,
            name,
            description,
            tags, 
            slug, 
            image, 
            chakra, 
            element, 
            zodiac
        }`
    )
}