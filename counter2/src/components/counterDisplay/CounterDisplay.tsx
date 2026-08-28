type Props = {
    countMaxValue: string
    countStartValue: string
}
export const CounterDisplay = ({countMaxValue, countStartValue}: Props) => {
    const countText = 'enter value and press \'set\''
    return (
        <div className={'display'}>

            <div
                className={countStartValue === '' ? 'countText' : 'count'}>{countStartValue !== '' ? countStartValue : countText}</div>
        </div>
    )
}