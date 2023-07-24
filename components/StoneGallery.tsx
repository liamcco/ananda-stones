"use client";

import { Stone } from "@/types/Stone";
import { useFilterController } from "@/controllers/filterController";
import StoneGalleryCard from "./StoneGalleryCard";
import Searchfield from "./Searchfield";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  const allStones = props.stones;
  const controller = useFilterController(props.stones);
  const stonesToShow = props.stones.filter((stone) =>
    controller.IDsToShow.includes(stone._id)
  );
  const currentStone = allStones.find(
    (stone) => stone._id === controller.currentStoneID
  );

  return (
    <div className="mt-4 w-full">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Searchfield searchFor={controller.searchFor} />
        </div>
      </div>

      {currentStone ? (
        <>
          <div className="mt-5 relative">
            <div className="w-full flex justify-center">
              <StoneGalleryCard stone={currentStone} />
            </div>
          </div>

          <div className="relative">
            <div className="fixed bottom-0 left-0 w-full">
              <div className="flex justify-between m-6">
                <button
                  className="bg-gray-500 text-white rounded-full p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                  onClick={controller.previous}
                >
                  Bakåt
                </button>
                <button
                  className="bg-gray-500 text-white rounded-full p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
                  onClick={controller.next}
                >
                  Nästa
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 mt-5">
          <p className="text-2xl font-bold">Inga stenar hittades</p>
          <p className="text-sm">Försök med ett annat sökord</p>
        </div>
      )}
    </div>
  );
}
