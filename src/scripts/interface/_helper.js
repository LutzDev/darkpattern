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
                notification(`Einstellung erfolgreich gespeichert`, "success");
                return resolve(setting);
            });
        }catch (error){
            notification(`Es ist ein Fehler beim Speichern der Einstellungen aufgetreten: ${error}`, "error");
            return reject(error);
        }
    })

}

export const countLetter = (element) => {
    let currentCount = element.getAttribute("maxlength") - 1 - element.value.length;
    if(element.tagName == "TEXTAREA"){
        updateCounter(currentCount, document.getElementById("text__counter-textarea"));
    }else{
        updateCounter(currentCount, document.getElementById("text__counter-input"));
    }
}

const updateCounter = (counter, element) => {
    if(counter < 0){
        element.innerText = "zu viele Zeichen";
        element.classList.add("warning");
    }else{
        element.innerText = counter;
        element.classList.remove("warning");
    }
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

export const notification = (message, status) => {
    let notificationItem = document.createElement("div");
    notificationItem.classList.add("notification", "notification__success");
    const notification = document.getElementById("notificationContainer");
    let content;

    if (elementExist(notification)) {
        if(status === "success"){
            content = "<div class=\"icon icon__success\">\n" +
                "                <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\">\n" +
                "                    <path d=\"M14.789 9.812l-3.618 3.617-1.959-1.958a.749.749 0 10-1.06 1.06l2.489 2.489a.749.749 0 001.06 0l4.148-4.148a.749.749 0 10-1.06-1.06z\" fill=\"#323232\"/>\n" +
                "                    <path d=\"M19.159 5.173a10.522 10.522 0 01-6.034-2.509v-.001a1.748 1.748 0 00-2.251.001 10.523 10.523 0 01-6.033 2.509A1.74 1.74 0 003.25 6.912v4.33c0 4.69 3.382 9.093 8.024 10.407.471.133.982.133 1.453 0 4.641-1.315 8.023-5.716 8.023-10.406v-4.33a1.74 1.74 0 00-1.592-1.74h.001zm-.118 1.496h.001c.122.009.208.121.208.244v4.33c0 4.044-2.93 7.829-6.931 8.962-.207.059-.43.059-.637 0-4.002-1.132-6.932-4.919-6.932-8.963v-4.33c0-.123.086-.234.208-.243h.001a12.021 12.021 0 006.892-2.867h.001a.23.23 0 01.297.001 12.02 12.02 0 006.892 2.866z\" fill=\"#323232\"/>\n" +
                "                </svg>\n" +
                "            </div>\n" +
                "            <p class=\"notification__text\">"+message+"</p>"
        }else if(status === "error"){
            content = "<div class=\"icon icon__error\">\n" +
                "                <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\">\n" +
                "                    <path d=\"M12.75 13.12V9.38a.75.75 0 00-1.5 0v3.74a.75.75 0 001.5 0zm-.699 2.256l-.052-.001-.039.001a.999.999 0 00.04 1.999 1 1 0 00.051-1.999zm-.078 1.498a.226.226 0 00.026.001l-.026-.001z\" fill=\"#323232\"/>\n" +
                "                    <path d=\"M14.68 3.767c-1.185-2.075-4.175-2.075-5.36 0L1.661 17.171c-1.177 2.058.309 4.619 2.68 4.619h15.318c2.37 0 3.856-2.561 2.68-4.619L14.68 3.767zm-1.302.744l7.659 13.404a1.588 1.588 0 01-1.378 2.375H4.341a1.587 1.587 0 01-1.378-2.375l7.659-13.404a1.587 1.587 0 012.756 0z\" fill=\"#323232\"/>\n" +
                "                </svg>\n" +
                "            </div>\n" +
                "            <p class=\"notification__text\">"+message+"</p>"
        }
        notificationItem.innerHTML = content.trim();
        notification.innerHTML = "";
        notification.appendChild(notificationItem);
    }
}


export const toggleClass = (element, property) => {
    for (const sibling of element.parentNode.children) {
        sibling.classList.remove(property);
    }
    element.classList.add(property);
}

export const trimUrl = (url) => {
    return url.replace(/^(https?:\/\/)?(www\.)?/,'');
}