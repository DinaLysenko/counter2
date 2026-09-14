type Props = {
    countMaxValue: string
    countStartValue: string
    inputStartValue: string
    inputMaxValue: string
}
export const CounterDisplay = ({countMaxValue, countStartValue, inputMaxValue, inputStartValue}: Props) => {
    const countTitle = 'enter value and press \'set\''
    const counterStyle = countStartValue === '' ? 'countText' : countStartValue === countMaxValue ? 'countMax' : 'count'
    return (
        <div className={'display'}>
            {
                <div className={counterStyle}>{countStartValue !== '' ? countStartValue : countTitle}</div>
            }

        </div>
    )
}