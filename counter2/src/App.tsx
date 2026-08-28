import './App.css'
import {SettingButtonPanel} from './components/settingButtonPanel/SettingButtonPanel.tsx';
import {useState} from 'react';
import {InputSettingDisplay} from './components/inputSettingDisplay/InputSettingDisplay.tsx';
import {CounterDisplay} from './components/counterDisplay/CounterDisplay.tsx';
import {ButtonPanel} from './components/buttonPanel/ButtonPanel.tsx';


function App() {
    const [inputStartValue, setInputStartValue] = useState('0');
    const [inputMaxValue, setInputMaxValue] = useState('5');

    const [countStartValue, setCountStartValue] = useState('');
    const [countMaxValue, setCountMaxValue] = useState('');


    return (
        <div className="wrapper">
            <div className={'counterCard'}>
                <InputSettingDisplay
                    inputStartValue={inputStartValue}
                    inputMaxValue={inputMaxValue}
                    setInputStartValue={setInputStartValue}
                    setInputMaxValue={setInputMaxValue}

                />
                <SettingButtonPanel inputStartValue={inputStartValue}
                                    inputMaxValue={inputMaxValue}
                                    setCountStartValue={setCountStartValue}
                                    setCountMaxValue={setCountMaxValue}

                />
            </div>
            <div className={'counterCard'}>
                <CounterDisplay countStartValue={countStartValue}
                                countMaxValue={countMaxValue}
                />
                <ButtonPanel countStartValue={countStartValue}
                             countMaxValue={countMaxValue}
                             setCountStartValue={setCountStartValue}
                             inputMaxValue={inputMaxValue}
                             setCountMaxValue={setCountMaxValue}
                             inputStartValue={inputStartValue}
                />
            </div>
        </div>
    )
}

export default App
