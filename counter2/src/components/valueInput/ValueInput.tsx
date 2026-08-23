import {LabelForInputValue} from '../labelForInputValue/LabelForInputValue.tsx';

export const ValueInput = () => {
    return (
        <div className={'valueInput'}>
            <div>
                <LabelForInputValue  title={'max value'}/>
                <input/>
            </div>
            <div><LabelForInputValue  title={'start value'}/>
                <input/>
            </div>
        </div>

    )
}