import {navHandler} from "./_navigation";
import {closePopup} from "./_popup";
import {getText} from "./_helper";

window.onload = () => {
    init();

}
const init = () => {
    navHandler();
    closePopup();
    getText();
}
