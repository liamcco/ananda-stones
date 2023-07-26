import { Stone } from "@/types/Stone";

interface Props {
  stones: Stone[];
}

export default function StoneList(props: Props) {
  return (
    <div className="p-2">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex flex-col">
          {props.stones.map((stone) => (
            <button
              key={stone._id}
              className="transition hover:scale-105 bg-white rounded-lg hover:shadow-md"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold">{stone.name}</h3>
                <p className="text-gray-500">{stone.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
