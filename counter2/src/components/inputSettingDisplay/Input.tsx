import type {ChangeEvent} from 'react';


type Props = {
    id: string;
    inputValue: string
    setValue: (value:string) => void
    setCountStartValue: (countStartValue: string) => void
    error: boolean
}
export const Input = ({inputValue, setValue, setCountStartValue, error, id}: Props) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement, HTMLInputElement>) => {

        setValue(e.currentTarget.value)
        setCountStartValue('')
        localStorage.setItem('count', '');
        if(id === 'maxValue'){
            localStorage.setItem('maxValue', e.currentTarget.value)
        }
        if(id === 'startValue'){
            localStorage.setItem('startValue', e.currentTarget.value)
        }
    }

    return (
        <input value={inputValue}
               type="number"
               className={error ? 'inputError' : 'input'}
               onChange={onChangeHandler}

        />
    )
}