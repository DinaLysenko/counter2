import {LabelForInputValue} from '../labelForInputValue/LabelForInputValue.tsx';

export const ValueInput = ()=>{
    return (
        <div >
            <LabelForInputValue htmlFor='maxValue' title={'maxValue'}/>
            <input />
            <LabelForInputValue htmlFor='minValue' title={'minValue'}/>
            <input />
        </div>

    )
}