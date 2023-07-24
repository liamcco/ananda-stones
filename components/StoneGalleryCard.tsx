import type { Stone } from "@/types/Stone";
import Image from "next/image";
import { HelpsWith, ChakraList, ElementList, ZodiacList, MonthList } from "./CardFields";

interface Props {
  stone: Stone;
  index?: number;
}

export default function StoneGalleryCard(props: Props) {
  const stone = props.stone;
  const zIndex = props.index !== undefined ? `absolute z-[${props.index}]` : '';

  return (
    <div
      className={`bg-white border-2 border-gray-500 rounded-lg p-1 max-w-xs mx-4 ${zIndex}`}
    >
      <div className="px-2 pb-4">
        <Image
          src={stone.image}
          alt={stone.name}
          width={750}
          height={300}
          className="object-cover rounded-lg p-4"
        />
        <div className="text-center mb-4">
          <div className="font-extrabold text-2xl mb-2">{stone.name}</div>
          <div className="text-sm font-bold mb-4">{stone.subtitle}</div>
          <div className="text-sm">{stone.description}</div>
        </div>
        
        <div className="flex flex-col gap-4 px-2">
          <HelpsWith tags={stone.tags}/>
          <ChakraList chakras={stone.chakra}/>
          <ElementList elements={stone.element}/>
          <ZodiacList zodiacs={stone.zodiac}/>
          <MonthList months={stone.month}/>
        </div>
      </div>
    </div>
  );
}
