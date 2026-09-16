type Props = {
    countMaxValue: string
    countStartValue: string
    error: boolean
}
export const CounterDisplay = ({countMaxValue, countStartValue, error}: Props) => {
    const countTitle = 'enter value and press \'set\''
    const counterStyle = error ? 'errorCount' : countStartValue === '' ? 'countText' : countStartValue === countMaxValue ? 'countMax' : 'count'

    return (
        <div className={'display'}>

            <div
                className={counterStyle}>{error ? 'Incorrect value!' : countStartValue !== '' ? countStartValue : countTitle}
            </div>


        </div>
    )
}