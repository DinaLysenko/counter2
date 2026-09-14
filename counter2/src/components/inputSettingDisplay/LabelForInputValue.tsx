type Props={

    title:string,
}
export const LabelForInputValue =({ title}:Props)=>{
    return (
        <label  className='labelText'>{title}:</label>
    )
}