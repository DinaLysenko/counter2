import {CounterDisplay} from '../counterDisplay/CounterDisplay.tsx';
import {ButtonPanel} from '../buttonPanel/ButtonPanel.tsx';
import {useState} from 'react';

export const Counter = () => {
    const maxCount = 5
    const [counter, setCounter] = useState(0);
    return (
        <div className={'counterCard'}>
            <CounterDisplay counter={counter} maxCount={maxCount}/>
            <ButtonPanel setCounter={setCounter} counter={counter} maxCount={maxCount}/>
        </div>
    )
}