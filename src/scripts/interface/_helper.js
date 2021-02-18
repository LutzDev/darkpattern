import tippy from "tippy.js";

export const elementExist = (element) => {
    if (typeof (element) != 'undefined' && element != null) {
        return true;
    } else {
        console.log(element + " nicht gefunden");
        return false;
    }
}

export const fillTextData =  () => {
    return new Promise(async (resolve) => {
        console.log("Processing getText");
        const textSnippets = document.querySelectorAll('[data-translate]');
        if (elementExist(textSnippets)) {
            try{
                const response = await fetch("../languages/lang_DE.json");
                console.log("Fetch done")
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                console.log("json() done")
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
                console.log("loop done")
                resolve();
            }catch (err){
                console.log(err);
            }

        }
    })
}


export const toggleClass = (element, property) => {
    for (const sibling of element.parentNode.children) {
        sibling.classList.remove(property);
    }
    element.classList.add(property);
}