import type {ChangeEvent} from 'react';

type Props = {
    value: string
    setValue: (value: string) => void
    setCountStartValue: (countStartValue: string) => void
    error: boolean
}
export const Input = ({value, setValue, setCountStartValue, error}: Props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setCountStartValue('')
    }

    return (
        <input value={value}
               type="number"
               className={error ? 'inputError' : 'input'}
               onChange={onChangeHandler}
        />
    )
}