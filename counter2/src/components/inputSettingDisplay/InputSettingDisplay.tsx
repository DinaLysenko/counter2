import {LabelForInputValue} from './LabelForInputValue.tsx';
import {Input} from './Input.tsx';


type Props = {
    inputStartValue: string
    inputMaxValue: string
    setInputStartValue: (inputStartValue: string) => void
    setInputMaxValue: (inputMaxValue: string) => void
    setError: (error: null|string) => void
    error: string|null
}
export const InputSettingDisplay = ({inputStartValue, inputMaxValue, setInputStartValue, setInputMaxValue, setError, error}: Props) => {
    return (
        <div className={'display'}>
            <div className="settingsSection">
                <div className="inputGroup">
                    <LabelForInputValue title="max value"/>
                    <Input value={inputMaxValue} setValue={setInputMaxValue} setError={setError} error={error}/>
                </div>
                <div className="inputGroup">
                    <LabelForInputValue title="start value"/>
                    <Input value={inputStartValue} setValue={setInputStartValue} setError={setError} error={error}/>
                </div>
            </div>
        </div>
    )
}