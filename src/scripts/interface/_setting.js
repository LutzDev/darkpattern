import {elementExist} from "./_helper";

export const settingsHandler = () => {
    setSetting();
}

const setSetting = () => {
    const settingItems = document.querySelectorAll(".switch");
    console.log(settingItems);
    if(elementExist(settingItems)){
        settingItems.forEach(settingItem => {
            checkSetting(settingItem);
            settingItem.addEventListener("click",  function (){
                storeSettings(this);
            });
        });
    }
}

function storeSettings(element){
    const isEnabled = element.checked;
    const setting = { [element.id]: isEnabled };
    chrome.storage.local.set(setting, () => {
        console.log("stored", setting);
    });
}

function checkSetting(element) {
    chrome.storage.local.get([element.id], (result) => {
        element.checked = result[element.id];
    });
}
