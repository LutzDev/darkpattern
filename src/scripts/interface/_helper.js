import tippy from "tippy.js";

export const elementExist = (element) => {
    if(typeof(element) != 'undefined' && element != null){
        return true;
    }else{
        console.log(element + " nicht gefunden");
        return false;
    }
}

export const getText = async () => {
    const textSnippets = document.querySelectorAll('[data-translate]');
    if(elementExist(textSnippets)) {
        for(const textSnippet of textSnippets){
            await console.log(fillTextData(textSnippet));
        }
    }
}

const fillTextData = async (element) => {
    return fetch("../languages/lang_DE.json")
        .then(response => response.json())
        .then(data => {
            element.innerHTML = data[element.getAttribute("data-translate")];
        })
}


export const controlSiblings = (element) => {
    for (const sibling of element.parentNode.children) {
        console.log(sibling);
        sibling.classList.remove('active');
    }
    element.classList.add("active");
}