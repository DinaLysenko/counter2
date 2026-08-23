type Props={
    htmlFor:string,
    title:string,
}
export const LabelForInputValue =({htmlFor, title}:Props)=>{
    return (
        <label htmlFor={htmlFor}>{title}</label>
    )
}