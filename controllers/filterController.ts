import { useState } from "react";
import { Stone } from "@/types/Stone";

export interface FilterControls {
    searchFor(_: string): void
    IDsToShow: string[];
    numOfMatches: number;
    currentStoneID: string;
    currentStoneIndex: number;
    next: () => void;
    previous: () => void;
    selectStone: (id: string) => void;
}

export function useFilterController(stones: Stone[]): FilterControls {
    const allStoneIDs = stones.map(stone => stone._id);
    const [IDsToShow, setIDsToShow] = useState<string[]>(allStoneIDs);
    const [currentStoneIndex, setCurrentStoneIndex] = useState<number>(1);

    function next() {
        if (currentStoneIndex === IDsToShow.length) return;
        setCurrentStoneIndex(currentStoneIndex + 1);
    }

    function previous() {
        if (currentStoneIndex === 1) return;
        setCurrentStoneIndex(currentStoneIndex - 1);
    }

    function selectStone(id: string) {
        const index = IDsToShow.indexOf(id);
        if (index === -1) return;
        setCurrentStoneIndex(index + 1);
    }

    async function searchFor(query: string) {
        if (query === "") return setIDsToShow(allStoneIDs);
        const matchingStones = stones.filter(stone => stone.name.toLowerCase().includes(query.toLowerCase()));
        const matchingIDs = matchingStones.map(stone => stone._id);

        setIDsToShow(matchingIDs);
    }

    return {
        searchFor,
        IDsToShow,
        numOfMatches: IDsToShow.length,
        currentStoneIndex,
        currentStoneID: IDsToShow[currentStoneIndex - 1],
        next,
        previous,
        selectStone,
    }
}
