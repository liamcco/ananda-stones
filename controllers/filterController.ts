import { useMemo, useState } from "react";
import { Stone } from "@/types/Stone";

export interface FilterControls {
    searchFor(_: string): void
    matchingStones: Stone[]
}

export function useFilterController(stones: Stone[]): FilterControls {
    const allStones = useMemo(() => (stones), [stones]);
    const [matchingStones, setMatchingStones] = useState<Stone[]>(allStones);

    return useMemo(() => ({
        searchFor(query: string) {
            if (query === "") return setMatchingStones(allStones);
            const matchingStonesResult = allStones.filter(stone => 
                stone.name.toLowerCase().includes(query.toLowerCase())
                || stone.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
                || (stone.chakra && stone.chakra.some(chakra => chakra.toLowerCase().includes(query.toLowerCase())))
                || (stone.element && stone.element.some(element => element.toLowerCase() === query.toLowerCase()))
                || (stone.month && stone.month.some(month => month.toLowerCase() === query.toLowerCase()))
                || (stone.zodiac && stone.zodiac.some(zodiac => zodiac.toLowerCase() === query.toLowerCase()))
            );
            setMatchingStones(matchingStonesResult);
        },
        matchingStones
    }
    ), [matchingStones, allStones]);
}
