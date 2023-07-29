import { Stone } from "@/types/Stone";
import { use, useEffect, useState } from "react";


export interface GalleryController {
    goToStone: (index: number) => void;
    identifier: string;
    selectStone: (_id: string) => void;
    indexOfCurrentStone: number;
    onNewIndex: (index: number) => void;
    next: () => void;
    previous: () => void;
}

export function useGalleryController(stones: Stone[]): GalleryController {
    const identifier = "card-";
    const allStones = stones;

    const [indexOfCurrentStone, setIndexOfCurrentStone] = useState(0);

    const goToStone = (index: number) => {
        console.log('going to stone', index);
        const card = document.getElementById(
            identifier + index.toString()
        );
        if (card) {
            console.log('scrolling to card', card);
          card.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    }

    const _onNewIndex = (index: number) => {
        const newStone = allStones[index];
        document.body.style.backgroundColor = newStone.metadata?.palette?.lightMuted?.background ?? "#fff";
        setIndexOfCurrentStone(index)
    }

    const onNewIndex = (index: number) => {
        if (index < 0 || index >= allStones.length) return;
        _onNewIndex(index);
    }

    const selectStone = (_id: string) => {
        console.log('selecting stone', _id);
        const index = allStones.findIndex(stone => stone._id === _id);
        goToStone(index);
    }

    const next = () => {
        console.log('next');
        const newIndex = indexOfCurrentStone + 1;
        goToStone(newIndex);
    }

    const previous = () => {
        console.log('previous');
        const newIndex = indexOfCurrentStone - 1;
        goToStone(newIndex);
    }

    useEffect(() => {
        const newStone = allStones[indexOfCurrentStone];
        document.body.style.backgroundColor = newStone.metadata?.palette?.lightMuted?.background ?? "#fff";
    }, [allStones, indexOfCurrentStone])


    return {
        goToStone,
        identifier,
        selectStone,
        indexOfCurrentStone,
        onNewIndex,
        next,
        previous,
    };
}

