import AppTitle from "@/components/AppTitle";
import StoneGallery from "@/components/StoneGallery";
import { getStones } from "@/sanity/sanity-utils";

export default async function Home() {
  const stones = await getStones();

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center md:block">
      <AppTitle />
      <StoneGallery stones={stones} />
    </div>
  );
}
