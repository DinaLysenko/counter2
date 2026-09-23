type Props = {
    countStartValue: string
    error: boolean
    inputMaxValue: string
}
export const CounterDisplay = ({ countStartValue, error, inputMaxValue}: Props) => {
    const countTitle = 'enter value and press \'set\''
    const counterStyle = error ? 'errorCount' : countStartValue === '' ? 'countText' : countStartValue === inputMaxValue ? 'countMax' : ''

    return (
        <div className={'display'}>

            <div
                className={counterStyle || 'count'}>{ error? 'Incorrect value!':  countStartValue !== '' ? countStartValue : countTitle}
            </div>


        </div>
    )
}