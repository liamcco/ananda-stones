import { Stone } from "@/types/Stone";


interface GalleryController {
    goToStone: (index: number) => void;
    identifier: string;
    onNewIndex: (index: number) => void;
}

export function useGalleryController(stones: Stone[]): GalleryController {
    const identifier = "card-";
    const allStones = stones;

    const goToStone = (index: number) => {
        const card = document.getElementById(identifier + index.toString());
        if (card) {
          console.log('scrolling to card', index);
          card.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
        }
    }

    const onNewIndex = (index: number) => {
        const newStone = allStones[index];
        document.body.style.backgroundColor = newStone.metadata?.palette?.lightMuted?.background ?? "#fff";
    }

    return {
        goToStone,
        identifier,
        onNewIndex
    };
}

