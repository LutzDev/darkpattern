import {elementExist} from "./_helper";

export const auditHandler = () => {
    setUrl();
}

const setUrl = () => {
    chrome.storage.local.get(["currentDomain"], (result) => {
        const currentSite = document.getElementById("currentSiteTitle");
        if(elementExist(currentSite)){
            currentSite.innerText = result.currentDomain;
            console.log(currentSite)
            console.log(result.currentDomain);
            console.log("URL abgeändert");
        }else{
            console.log("Nicht vorhanden")
        }
    });
}
