type Props = {
    title: string
    onClick: () => void,
    disabled: boolean
}
export const Button = ({title, onClick, disabled}: Props) => {
    return (
        <button className={disabled ? 'buttonDisabled' : 'button'} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}