import AppTitle from "@/components/AppTitle";
import MainPageContent from "@/components/MainPageContent";
import { getStones } from "@/sanity/sanity-utils";

export default async function Home() {
  const stones = await getStones();

  return (
    <>
      <AppTitle />
      <MainPageContent stones={stones} />
    </>
  );
}
