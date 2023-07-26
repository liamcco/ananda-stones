import { AiOutlineUnorderedList } from 'react-icons/ai'

export default function ToggleViewModeButton() {
  return (
    <button className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-gray-100">
      <AiOutlineUnorderedList className="w-10 h-6"/>
    </button>
  );
}