import './App.css'
import {useState} from 'react';
import {InputSettingDisplay} from './components/inputSettingDisplay/InputSettingDisplay.tsx';
import {CounterDisplay} from './components/counterDisplay/CounterDisplay.tsx';
import {Button} from './components/button/Button.tsx';


function App() {

    const [inputStartValue, setInputStartValue] = useState(()=>{
        const saveInputStartValue=localStorage.getItem('startValue');
        if(saveInputStartValue){
            return saveInputStartValue;
        }
        else{
            return '0'
        }
    });
    const [inputMaxValue, setInputMaxValue] = useState(()=>{
        const saveInputMaxValue=localStorage.getItem('maxValue');
        if(saveInputMaxValue){
            return saveInputMaxValue;
        }
        else{
            return '5'
        }
    });

    const [count, setCount] = useState(()=>{
        const countStartValue=localStorage.getItem('count');
        const resetCountValue=localStorage.getItem('countResetValue');
        if(resetCountValue===inputStartValue&&countStartValue!==''){
            return resetCountValue;
        }
        if(countStartValue){
            return countStartValue;
        }
        else{
            return ''
        }
    });

    const error = +inputMaxValue <= +inputStartValue || +inputStartValue < 0 || +inputMaxValue < 0

    const incrementOnHandler = () => {
        const countValue=(+count + 1).toString()
        setCount(countValue)
        localStorage.setItem('count', countValue)

    }
    const resetOnHandler = () => {
        setCount(inputStartValue)
        localStorage.setItem('countResetValue', inputStartValue)
    }
    return (
        <div className="wrapper">
            <div className={'counterCard'}>
                <InputSettingDisplay
                    inputStartValue={inputStartValue}
                    inputMaxValue={inputMaxValue}
                    setInputStartValue={setInputStartValue}
                    setInputMaxValue={setInputMaxValue}
                    setCountStartValue={setCount}

                />

                <div className="buttonPanel">
                    <Button title="set"
                            onClick={() => {
                                setCount(inputStartValue);
                                localStorage.setItem('count', inputStartValue)
                            }}
                            disabled={error}
                    />
                </div>
            </div>
            <div className={'counterCard'}>
                <CounterDisplay countStartValue={count}
                                error={error}
                                inputMaxValue={inputMaxValue}
                />

                <div className={'buttonPanel'}>
                    <Button title={'inc'} onClick={incrementOnHandler}
                            disabled={count === '' || count === inputMaxValue}/>
                    <Button title={'reset'} onClick={resetOnHandler} disabled={count === ''}/>
                </div>
            </div>
        </div>
    )
}

export default App
