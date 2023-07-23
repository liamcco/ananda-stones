import { useState } from "react";
import { Stone } from "@/types/Stone";

export interface FilterControls {
    searchFor(_: string): void
    IDsToShow: string[];
}

export function useFilterController(stones: Stone[]): FilterControls {
    const allStoneIDs = stones.map(stone => stone._id);
    const [IDsToShow, setIDsToShow] = useState<string[]>(allStoneIDs);

    async function searchFor(query: string) {
        if (query === "") return setIDsToShow(allStoneIDs);
        const matchingStones = stones.filter(stone => stone.name.toLowerCase().includes(query.toLowerCase()));
        const matchingIDs = matchingStones.map(stone => stone._id);

        setIDsToShow(matchingIDs);
    }

    return {
        searchFor,
        IDsToShow
    }
}
