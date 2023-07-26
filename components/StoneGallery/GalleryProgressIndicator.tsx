interface Props {
  indexOfCurrentStone: number;
  numOfStones: number;
}

export default function GalleryProgressIndicator(props: Props) {
  const percentage = Math.round(
    ((props.indexOfCurrentStone + 1) / props.numOfStones) * 100
  );

  return (
    <div className="w-32">
      <div className="w-full bg-[#232323] p-[2px] rounded-[3px] shadow">
        <span
          className="block h-[3px] bg-[#659cef] rounded-[3px]"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
    </div>
  );
}
