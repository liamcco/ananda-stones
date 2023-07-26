interface Props {
  indexOfCurrentChild: number;
}

export default function CarouselButtonSet(props: Props) {
  return (
    <div className="hidden md:flex justify-between absolute z-10 w-[42rem]">
      <button
        className="bg-[#232323] text-[#659cef] rounded-full w-10 h-10 flex justify-center items-center"
        onClick={() => {
          const cardToFind =
            "card-" + (props.indexOfCurrentChild - 1).toString();
          const card = document.getElementById(cardToFind);
          if (card) {
            card.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        className="bg-[#232323] text-[#659cef] rounded-full w-10 h-10 flex justify-center items-center"
        onClick={() => {
          const cardToFind =
            "card-" + (props.indexOfCurrentChild + 1).toString();
          const card = document.getElementById(cardToFind);
          if (card) {
            card.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
}
