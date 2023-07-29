import type { Stone } from "@/types/Stone";
import Image from "next/image";
import { CardField } from "./CardField";
import { GrLinkNext } from "react-icons/gr";

interface Props {
  stone: Stone;
  next: () => void;
}

export default function StoneGalleryCard(props: Props) {
  const stone = props.stone;

  return (
    <div className="rounded-lg p-1 bg-white shadow-lg">
      <div className="px-2 pb-4">
        <Image
          src={stone.image}
          alt={stone.name}
          width={300}
          height={300}
          className="p-4 mx-auto"
          placeholder="blur"
          blurDataURL={stone.metadata.lqip}
        />

        <div className="text-center mb-4">
          <div className="font-extrabold text-2xl mb-2 px-4">{stone.name}</div>
          <div className="text-sm font-bold mb-4">{stone.subtitle}</div>
          <div className="text-sm">{stone.description}</div>
        </div>

        <div className="flex flex-wrap gap-4 px-2">
          <CardField title="Hjälper med" field={stone.tags} size="lg" />
          <CardField title="Chakra" field={stone.chakra} />
          <CardField title="Element" field={stone.element} />
          <CardField title="Zodiac" field={stone.zodiac} />
          <CardField title="Månad" field={stone.month} />
        </div>

        <div className="flex justify-end">
          <button
            onClick={props.next}
            className="bg-slate-200 rounded-full p-2"
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
}
