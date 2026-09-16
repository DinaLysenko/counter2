import './App.css'
import {useState} from 'react';
import {InputSettingDisplay} from './components/inputSettingDisplay/InputSettingDisplay.tsx';
import {CounterDisplay} from './components/counterDisplay/CounterDisplay.tsx';
import {Button} from './components/button/Button.tsx';


function App() {
    const [inputStartValue, setInputStartValue] = useState('0');
    const [inputMaxValue, setInputMaxValue] = useState('5');

    const [countStartValue, setCountStartValue] = useState('');
    const [countMaxValue, setCountMaxValue] = useState('');
    const error = inputMaxValue <= inputStartValue || +inputStartValue < 0 || +inputMaxValue < 0


    const incrementOnHandler = () => {
        setCountStartValue((+countStartValue + 1).toString())
    }
    const resetOnHandler = () => {
        setCountStartValue(inputStartValue)
    }
    return (
        <div className="wrapper">
            <div className={'counterCard'}>
                <InputSettingDisplay
                    inputStartValue={inputStartValue}
                    inputMaxValue={inputMaxValue}
                    setInputStartValue={setInputStartValue}
                    setInputMaxValue={setInputMaxValue}
                    setCountStartValue={setCountStartValue}

                />

                <div className="buttonPanel">
                    <Button title="set"
                            onClick={() => {
                                setCountStartValue(inputStartValue);
                                setCountMaxValue(inputMaxValue)
                            }}
                            disabled={error}
                    />
                </div>
            </div>
            <div className={'counterCard'}>
                <CounterDisplay countStartValue={countStartValue}
                                countMaxValue={countMaxValue}
                                error={error}
                />

                <div className={'buttonPanel'}>
                    <Button title={'inc'} onClick={incrementOnHandler}
                            disabled={countStartValue === '' || countStartValue === inputMaxValue}/>
                    <Button title={'reset'} onClick={resetOnHandler} disabled={countMaxValue === ''}/>
                </div>
            </div>
        </div>
    )
}

export default App
