import Train from "./Train";

interface TrainListProps {
    trains: any[];
}

export default function TrainList({ trains }: TrainListProps) {
    return (
        <div>
            {trains.map((train, index) => (<Train key = {index} train = {train} />))}
        </div>
    );
}