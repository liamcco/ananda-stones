import { Stone } from "@/types/Stone";
import Link from "next/link";
import Image from "next/image";

interface Props {
  stone: Stone;
}

export default function StoneGalleryCard(props: Props) {
  const stone = props.stone;
  return (
    <Link
      href={`/stones/${stone.slug}`}
      className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-green-500 transition max-w-xs mx-4"
    >
      <div className="flex flex-col items-center">
        {stone.image && (
          <Image
            src={stone.image}
            alt={stone.name}
            width={750}
            height={300}
            className="object-cover rounded-lg p-4"
          />
        )}
        <div className="font-extrabold my-2">{stone.name}</div>
      </div>
    </Link>
  );
}
