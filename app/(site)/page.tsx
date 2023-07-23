import { getStones } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const stones = await getStones();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-7xl font-extrabold">
        Ananda{" "}
        <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Stones
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Hitta din sten</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Alla stenar</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stones.map((stone) => (
          <Link
            key={stone._id}
            href={`/stones/${stone.slug}`}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-green-500 transition"
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
        ))}
      </div>
    </div>
  );
}
