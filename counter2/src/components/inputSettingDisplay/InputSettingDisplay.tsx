import {LabelForInputValue} from './LabelForInputValue.tsx';
import {Input} from './Input.tsx';


type Props = {
    inputStartValue: string
    inputMaxValue: string
    setInputStartValue: (inputStartValue: string) => void
    setInputMaxValue: (inputMaxValue: string) => void
    setCountStartValue: (countStartValue: string) => void

}
export const InputSettingDisplay = ({
                                        inputStartValue,
                                        inputMaxValue,
                                        setInputStartValue,
                                        setInputMaxValue,
                                        setCountStartValue,

                                    }: Props) => {

    const maxInputError = +inputMaxValue < +inputStartValue || inputMaxValue === inputStartValue
    const startInputError = +inputStartValue < 0 || inputMaxValue === inputStartValue

    return (
        <div className={'display'}>
            <div className="settingsSection">
                <div className="inputGroup">
                    <LabelForInputValue title="max value"/>
                    <Input id='maxValue'
                        inputValue={inputMaxValue}
                           setValue={setInputMaxValue}
                           setCountStartValue={setCountStartValue}
                           error={maxInputError}/>
                </div>
                <div className="inputGroup">
                    <LabelForInputValue title="start value"/>
                    <Input id='startValue'
                        inputValue={inputStartValue}
                           setValue={setInputStartValue}
                           setCountStartValue={setCountStartValue}
                           error={startInputError}
                    />
                </div>
            </div>
        </div>
    )
}