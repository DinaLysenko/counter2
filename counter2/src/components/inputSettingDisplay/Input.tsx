type Props = {
    value: string
    setValue: (value: string) => void
}
export const Input = ({value, setValue}: Props) => {

    return (
        <input value={value}
               type="number"
               className="inputValue"
               onChange={(e) => setValue(e.currentTarget.value)}
        />
    )
}