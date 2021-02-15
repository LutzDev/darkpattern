import {navHandler} from "./_navigation";
import {closePopup} from "./_popup";

window.onload = () => {
    console.log("Geladen");
    init();

}

const init = () => {
    navHandler();
    closePopup();
}