import {LabelForInputValue} from './LabelForInputValue.tsx';
import {Input} from './Input.tsx';


type Props = {
    inputStartValue: string
    inputMaxValue: string
    setInputStartValue: (inputStartValue: string) => void
    setInputMaxValue: (inputMaxValue: string) => void
}
export const InputSettingDisplay = ({inputStartValue, inputMaxValue, setInputStartValue, setInputMaxValue}: Props) => {
    return (
        <div className={'display'}>
            <div className="settingsSection">
                <div className="inputGroup">
                    <LabelForInputValue title="max value"/>
                    <Input value={inputMaxValue} setValue={setInputMaxValue}/>
                </div>
                <div className="inputGroup">
                    <LabelForInputValue title="start value"/>
                    <Input value={inputStartValue} setValue={setInputStartValue}/>
                </div>
            </div>
        </div>
    )
}