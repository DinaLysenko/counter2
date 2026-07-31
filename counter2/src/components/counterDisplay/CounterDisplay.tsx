type Props = {
    counter: number
    maxCount: number
}
export const CounterDisplay = ({counter, maxCount}: Props) => {
    return (
        <div className={'display'}>
            <div className={counter === maxCount ? 'countTextMax' : 'countText'}>{counter}</div>
        </div>
    )
}