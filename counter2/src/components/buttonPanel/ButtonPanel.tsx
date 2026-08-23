import {Button} from './Button.tsx';

type Props = {
    setCounter: (counter: string) => void
    counter: string;
    maxCount: string;
}

export const ButtonPanel = ({setCounter, counter, maxCount}: Props) => {
    const onIncHandler = () => {
        setCounter(counter + 1);
    }
    const onResetHandler = () => {
        setCounter('0')
    }
    return (
        <div className={'buttonPanel'}>
            <Button title={'inc'} onClick={onIncHandler} disabled={counter === maxCount } />
            <Button title={'reset'} onClick={onResetHandler} />
        </div>
    )
}