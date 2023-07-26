import { ImagePalette } from "sanity";

export type Stone = {
    _id: string;
    name: string;
    slug: string;
    subtitle: string;
    description: string;
    image: string;
    palette: ImagePalette
    tags: string[];
    chakra?: string[];
    element?: string[];
    zodiac?: string[];
    month?: string[];
    instore?: boolean;
}

/*
export declare interface ImagePalette {
    _type: 'sanity.imagePalette'
    darkMuted?: ImageSwatch
    darkVibrant?: ImageSwatch
    dominant?: ImageSwatch
    lightMuted?: ImageSwatch
    lightVibrant?: ImageSwatch
    muted?: ImageSwatch
    vibrant?: ImageSwatch
}
*/