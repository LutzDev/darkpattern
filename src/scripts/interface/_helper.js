import tippy from "tippy.js";

export const elementExist = (element) => {
    if (typeof (element) != 'undefined' && element != null) {
        return true;
    } else {
        console.log(element + " nicht gefunden");
        return false;
    }
}

export const getText = async () => {
    const textSnippets = document.querySelectorAll('[data-translate]');
    if (elementExist(textSnippets)) {
        for (const textSnippet of textSnippets) {
            await fillTextData(textSnippet);
        }
    }
}

const fillTextData = async (element) => {
    fetch("../languages/lang_DE.json")
        .then(response => response.json())
        .then(data => {
            if (elementExist(data[element.getAttribute("data-translate")])) {
                if (element.hasAttribute("data-tooltip")) {
                    tippy(element, {
                        content: data[element.getAttribute("data-translate")],
                        animation: 'scale',
                        allowHTML: true,
                        delay: [400, null],

                    });
                } else {
                    element.innerHTML = data[element.getAttribute("data-translate")];
                }
            }
        })
}


export const toggleClass = (element, property) => {
    for (const sibling of element.parentNode.children) {
        console.log(sibling);
        sibling.classList.remove(property);
    }
    element.classList.add(property);
}