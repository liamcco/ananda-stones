import MainPageContent from "@/components/MainPageContent";
import { getStones } from "@/sanity/sanity-utils";

export default async function Home() {
  const stones = await getStones();

  return (
    <>
      <MainPageContent stones={stones} />
    </>
  );
}
