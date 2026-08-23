import {LabelForInputValue} from './LabelForInputValue.tsx';
import {Input} from './Input.tsx';


type Props={
    maxValue: string
    setMaxValue: (maxValue: string) => void
    startValue: string
    setStartValue: (startValue: string) => void
}
export const InputSettingDisplay = ({maxValue, setStartValue, startValue, setMaxValue}:Props) => {
    return (
        <div className={'display'}>
            <div className='settingsSection'>
                <div className="inputGroup">
                    <LabelForInputValue title="max value"/>
                    <Input value={maxValue} setValue={setMaxValue}/>
                </div>
                <div className="inputGroup">
                    <LabelForInputValue title="start value"/>
                    <Input value={startValue} setValue={setStartValue}/>
                </div>
            </div>
        </div>
    )
}