import {elementExist} from "./_helper";

export const auditHandler = () => {
    setUrl();
}

const setUrl = () => {
    chrome.storage.local.get(["currentDomain"], (result) => {
        const currentSite = document.getElementById("currentSiteTitle");
        if(elementExist(currentSite)){
            currentSite.innerText = trimUrl(result.currentDomain);
        }else{
            console.log("Nicht vorhanden")
        }
    });
}

const trimUrl = (url) => {
    return url.replace(/^(https?:\/\/)?(www\.)?/,'');
}
