import {Button} from '../buttonPanel/Button.tsx';


type Props = {
    setCountStartValue: (countStartValue: string) => void
    inputStartValue: string
    inputMaxValue: string
    setCountMaxValue: (countMaxValue: string) => void
}
export const SettingButtonPanel = ({setCountStartValue, inputStartValue, inputMaxValue, setCountMaxValue}: Props) => {

    return (
        <div className="buttonPanel">
            <Button title="set" onClick={() => {
                setCountStartValue(inputStartValue);
                setCountMaxValue(inputMaxValue)
            }}
            />
        </div>
    )
}