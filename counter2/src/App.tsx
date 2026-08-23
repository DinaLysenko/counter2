import './App.css'
import {Counter} from './components/counter/Counter.tsx';
import {CounterSetting} from './components/counterSetting/CounterSetting.tsx';

function App() {


    return (
        <div className="wrapper">
            <CounterSetting/>
            <Counter/>
        </div>
    )
}

export default App
