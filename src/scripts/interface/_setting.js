import {elementExist, getSettingStatus, storeSettingStatus} from "./_helper";

export const settingsHandler = () => {
    setSetting();
}

const setSetting = async () => {
    const settingItems = document.querySelectorAll(".switch");
    if(elementExist(settingItems)){
        for(const settingItem of settingItems){
            settingItem.checked = await getSettingStatus(settingItem);
            settingItem.addEventListener("click",  function (){
                storeSettingStatus(this);
            });
        }
    }
}
