import type {ChangeEvent} from 'react';

type Props = {
    value: string
    setValue: (value: string) => void
    setError: (error: string) => void
    error: string|null
}
export const Input = ({value, setValue, setError, error}: Props) => {
const onChangeHandler=(e: ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
    setValue(e.currentTarget.value)
    if (+e.target.value<0) {
        setError('Incorrect value')
    }
}
    return (
        <input value={value}
               type="number"
               className={error ? 'inputError' : 'input'}
               onChange={onChangeHandler}
        />
    )
}