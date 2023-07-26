import { Stone } from "@/types/Stone";

interface Props {
  stones: Stone[];
}

export default function StoneList(props: Props) {
  return (
    <div className="text-center p-10">
      <h3 className="text-xl font-bold">To be implemented...</h3>
      <p>will show {props.stones.length} stones</p>
    </div>
  );
}
