import { getStones } from "@/sanity/sanity-utils";

export default async function Home() {
  const stones = await getStones();

  return (
    <div>
      {stones.map((stone: any) => (
        <div key={stone._id}>
          <h2>{stone.name}</h2>
          <p>{stone.description}</p>
        </div>
      ))}
    </div>
  );
}
