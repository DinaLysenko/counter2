type Props={

    title:string,
}
export const LabelForInputValue =({ title}:Props)=>{
    return (
        <label  className='text'>{title}:</label>
    )
}