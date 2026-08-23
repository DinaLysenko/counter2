import './App.css'
import {SettingButtonPanel} from './components/settingButtonPanel/SettingButtonPanel.tsx';
import {useState} from 'react';
import {InputSettingDisplay} from './components/inputSettingDisplay/InputSettingDisplay.tsx';
import {CounterDisplay} from './components/counterDisplay/CounterDisplay.tsx';
import {ButtonPanel} from './components/buttonPanel/ButtonPanel.tsx';


function App() {
    const [startValue, setStartValue] = useState('0');
    const [maxValue, setMaxValue] = useState('5');

    return (
        <div className="wrapper">
            <div className={'counterCard'}>
                <InputSettingDisplay startValue={startValue}
                                     setStartValue={setStartValue}
                                     maxValue={maxValue}
                                     setMaxValue={setMaxValue}
                />
                <SettingButtonPanel/>
            </div>
            <div className={'counterCard'}>
                <CounterDisplay counter={startValue} maxCount={maxValue}/>
                <ButtonPanel setCounter={setStartValue} counter={startValue} maxCount={maxValue}/>
            </div>
        </div>
    )
}

export default App
