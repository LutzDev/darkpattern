
window.onload = () => {
    document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
}


const nodeInsertedCallback = (event) => {
    controlCookies();
}

const controlCookies = async () => {
    let rules= {
        "OneTrust": "onetrust-consent-sdk",
        "Borlabscookie": "BorlabsCookieBox",
        "Cookiebot": "CybotCookiebotDialog",
        "Cookiefirst": "cf-root",
        "Consentmanager": "cmpbox",
    }
    if(await getSettingStatus("switch__cookie")){
        for (let key of Object.keys(rules)) {
            let cookieConsentID = document.getElementById(`${rules[key]}`);
            if(elementExist(cookieConsentID)){
                cookieConsentID.classList.add("dp__manipulation-cookie");
                chrome.storage.local.set({"cookieDetected": true});
                break;
            }else{
                chrome.storage.local.set({"cookieDetected": false});
            }
        }
    }else{
        chrome.storage.local.set({"cookieDetected": false});
    };
}

const elementExist = (element) => {
    if (typeof (element) != 'undefined' && element != null) {
        return true;
    } else {
        return false;
    }
}

const getSettingStatus = (element) => {
    return new Promise((resolve, reject) => {
        try{
            if((typeof element) != "string"){
                chrome.storage.local.get([element.id], (result) => {
                    return resolve(result[element.id]);
                });
            }else{
                chrome.storage.local.get(element, (result) => {
                    return resolve(result[element]);
                });
            }
        }catch (err){
            return reject(err);
        }
    })
}


