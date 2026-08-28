import {Button} from './Button.tsx';


type Props = {
    setCountStartValue: (countStartValue: string) => void;
    countStartValue: string
    countMaxValue: string
    inputMaxValue: string
    setCountMaxValue: (countMaxValue: string) => void;
    inputStartValue: string
}

export const ButtonPanel = ({setCountStartValue, countMaxValue, countStartValue, inputMaxValue, setCountMaxValue, inputStartValue}: Props) => {
    const onIncHandler = () => {
        setCountStartValue((+countStartValue + 1).toString());
    }
    const onResetHandler = () => {
        setCountStartValue(inputStartValue)
    }
    return (
        <div className={'buttonPanel'}>
            <Button title={'inc'} onClick={onIncHandler}
                    disabled={countStartValue === '' || countStartValue === inputMaxValue}/>
            <Button title={'reset'} onClick={onResetHandler} disabled={countMaxValue === ''}/>
        </div>
    )
}