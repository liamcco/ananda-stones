import { getStone } from "@/sanity/sanity-utils";

interface Props {
  params: {
    stone: string;
  };
}

export default async function Stone(props: Props) {
  const slug = props.params.stone;
  const stone = await getStone(slug);

  return <div>{stone.name}</div>;
}
