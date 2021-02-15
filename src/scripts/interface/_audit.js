import {elementExist} from "./_helper";

export const auditHandler = () => {
    setUrl();
}

const setUrl = () => {
    chrome.storage.local.get(["currentDomain"], (result) => {
        const currentSite = document.getElementById("actual__site");
        if(elementExist(currentSite)){
            currentSite.innerText = result.currentDomain;
        }else{
            console.log("Nicht vorhanden")
        }
    });
}
