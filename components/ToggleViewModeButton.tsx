import { AiOutlineUnorderedList } from "react-icons/ai";

interface Props {
  viewMode: "card" | "list";
  onToggle: () => void;
}

export default function ToggleViewModeButton(props: Props) {
  return (
    <button
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-gray-100"
      onClick={props.onToggle}
    >
      <AiOutlineUnorderedList className="w-10 h-6" />
    </button>
  );
}
