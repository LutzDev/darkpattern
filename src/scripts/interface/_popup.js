import {elementExist} from "./_helper";

export const closePopup = () => {
    const iconClose = document.getElementById("icon-close");
    if(elementExist(iconClose)){
        iconClose.addEventListener("click", ()=>{
            window.close();
        });
    }
}

