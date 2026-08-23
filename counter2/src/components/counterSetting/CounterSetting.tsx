import {SettingDisplay} from '../settingDisplay/SettingDisplay.tsx';
import {SettingButtonPanel} from '../settingButtonPanel/SettingButtonPanel.tsx';


export const CounterSetting = ()=>{
    return (
        <div className={'counterCard'}>
            <SettingDisplay/>
            <SettingButtonPanel/>
        </div>
    )
}