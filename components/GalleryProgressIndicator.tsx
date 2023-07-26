
interface Props {
    indexOfCurrentStone: number;
    numOfStones: number;
}

export default function GalleryProgressIndicator(props: Props) {
    return (<h2 className="text-base text-center">
        {props.indexOfCurrentStone + 1}/{props.numOfStones}
    </h2>)
}