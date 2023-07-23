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
    <div className="max-w-3xl mx-auto py-20s">
      <header>
        <h1 className="text-5xl font-extrabold drop-shadow">{stone.name}</h1>
      </header>

      <div className="flex mt-4">
        {stone.image && (
          <Image
            src={stone.image}
            alt={stone.name}
            width={350}
            height={100}
            className="object-cover rounded-lg p-4"
          />
        )}
        <div className="text-lg text-gray-700 mt-4">
          <p>{stone.description}</p>
        </div>
      </div>
    </div>
  );
}
