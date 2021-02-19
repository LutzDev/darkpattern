import tippy from "tippy.js";

export const elementExist = (element) => {
    if (typeof (element) != 'undefined' && element != null) {
        return true;
    } else {
        return false;
    }
}

export const fillTextData =  () => {
    return new Promise(async (resolve) => {
        const textSnippets = document.querySelectorAll('[data-translate]');
        if (elementExist(textSnippets)) {
            try{
                const response = await fetch("../languages/lang_DE.json");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                for(const textSnippet of textSnippets){
                    if (elementExist(data[textSnippet.getAttribute("data-translate")])) {
                        if (textSnippet.hasAttribute("data-tooltip")) {
                            tippy(textSnippet, {
                                content: data[textSnippet.getAttribute("data-translate")],
                                animation: 'scale',
                                allowHTML: true,
                                delay: [400, null],
                            });
                        }else if(textSnippet.hasAttribute("placeholder")){
                            textSnippet.setAttribute("placeholder", data[textSnippet.getAttribute("data-translate")]);
                        }else if(textSnippet.hasAttribute("value")){
                            textSnippet.setAttribute("value", data[textSnippet.getAttribute("data-translate")]);
                        }else{
                            textSnippet.innerHTML = data[textSnippet.getAttribute("data-translate")];
                        }
                    }
                }
                resolve();
            }catch (err){
                console.log(err);
            }

        }
    })
}

export const storeSettingStatus = (element) => {
    const setting = { [element.id]: element.checked };
    return new Promise(async (resolve, reject) => {
        try{
            await chrome.storage.local.set(setting, () => {
                return resolve(setting);
            });
        }catch (err){
            return reject(err);
        }
    })

}
export const getSettingStatus = (element) => {
    return new Promise((resolve, reject) => {
        try{
            console.log(typeof element);
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

export const loadCurrentURL = () => {
    return new Promise(async (resolve, reject) => {
        try{
            chrome.storage.local.get(["currentDomain"], (result) => {
                return resolve(result.currentDomain);
            });
        }catch (err){
            return reject(err);
        }
    })
}


export const toggleClass = (element, property) => {
    for (const sibling of element.parentNode.children) {
        sibling.classList.remove(property);
    }
    element.classList.add(property);
}