import {navHandler} from "./_navigation";
import {closePopup} from "./_popup";
window.onload = () => {
    init();

}
const init = () => {
    navHandler();
    closePopup();
}
