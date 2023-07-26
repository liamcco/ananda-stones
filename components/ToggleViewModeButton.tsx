import { AiOutlineUnorderedList } from "react-icons/ai";
import { PiCards } from "react-icons/pi";

interface Props {
  viewMode: "card" | "list";
  onToggle: () => void;
}

export default function ToggleViewModeButton(props: Props) {
  return (
    <button
      className="bg-gray-50 text-gray-900 text-sm rounded-lg hover:bg-gray-100 shadow-sm"
      onClick={props.onToggle}
    >
      {props.viewMode === "card" ? (
        <AiOutlineUnorderedList className="w-10 h-6" />
      ) : (
        <PiCards className="w-10 h-6" />
      )}
    </button>
  );
}
