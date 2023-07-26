export type Stone = {
    _id: string;
    name: string;
    slug: string;
    subtitle: string;
    description: string;
    image: string;
    // TOOD: REMOVE
    palette: any;
    tags: string[];
    chakra?: string[];
    element?: string[];
    zodiac?: string[];
    month?: string[];
    instore?: boolean;
}