import { getStone } from "@/sanity/sanity-utils";
import Image from "next/image";

interface Props {
  params: {
    stone: string;
  };
}

export default async function Stone(props: Props) {
  const slug = props.params.stone;
  const stone = await getStone(slug);

  return (
    <div className="flex flex-col items-center md:items-baseline min-m-md">
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-extrabold drop-shadow">{stone.name}</h1>
        {stone.tags && (
          <div className="text-xl text-gray-700">{stone.subtitle}</div>
        )}
      </header>

      <div className="flex flex-col md:flex-row mt-4 items-center">
        {stone.image && (
          <Image
            src={stone.image}
            alt={stone.name}
            width={350}
            height={100}
            className="object-cover rounded-lg p-4"
          />
        )}
        <div className="text-lg text-gray-700 mt-4 text-center md:text-left">
          <p>{stone.description}</p>
        </div>
      </div>
    </div>
  );
}
