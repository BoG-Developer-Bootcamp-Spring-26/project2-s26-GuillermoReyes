interface TrainProps {
    train: any;
}

export default function Train({ train }: TrainProps) {
    const onTime = (train.Delay === "T0S");

    return (
        <div>
            <h1>{train.DESTINATION}</h1>
            <p>Station: {train.STATION}</p>
            <p>Line: {train.LINE}</p>
            <p>Direction: {train.DIRECTION}</p>

            <p>Status: {onTime ? "Running On Time" : "Train is Delayed"}</p>
            <p>Arrival: {train.NEXT_ARR}</p>
        </div>
    );
}