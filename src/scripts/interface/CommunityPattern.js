import Pattern from "./Pattern";
import tippy from "tippy.js";

export default class CommunityPattern extends Pattern{
    title;
    description;

    constructor(title, description) {
        super(1);
        this.title = title;
        this.description = description;
        this.createItem();
    }

    createItem = () => {
        let content= "<div class=\"item__info\">\n" +
            "                    <div class=\"icon icon__pattern\">\n" +
            "                        <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\">\n" +
            "                            <path d=\"M2.75 19A3.25 3.25 0 016 15.75h4A3.25 3.25 0 0113.25 19a.75.75 0 001.5 0A4.75 4.75 0 0010 14.25H6A4.75 4.75 0 001.25 19a.75.75 0 001.5 0zm8.255-13.505a4.249 4.249 0 10-6.01 6.01 4.249 4.249 0 106.01-6.01zm-1.06 1.06a2.753 2.753 0 00-3.89 0 2.753 2.753 0 000 3.89 2.751 2.751 0 003.89-3.89zM16 14.75h3A2.25 2.25 0 0121.25 17a.75.75 0 001.5 0A3.75 3.75 0 0019 13.25h-3a.75.75 0 000 1.5zm3.798-8.548a3.25 3.25 0 10-4.596 4.597 3.25 3.25 0 004.596-4.597zm-1.061 1.061a1.748 1.748 0 00-2.474 0 1.748 1.748 0 000 2.474 1.748 1.748 0 002.474 0 1.748 1.748 0 000-2.474z\" fill=\"#323232\"/>\n" +
            "                        </svg>\n" +
            "                    </div>\n" +
            "                    <p class=\"item__title\">"+this.title+"</p>\n" +
            "                </div>\n" +
            "                <div class=\"item__interaction item__interaction-pattern\">\n" +
            "                    <div data-tooltip data-tippy-content=\""+this.description+"\" data-translate=\"pattern__community__info\" class=\"icon info__icon\">\n" +
            "                        <a href=\"https://www.w3schools.com\" target=\"_blank\" alt=\"Dark Pattern Info Seite\">\n" +
            "                            <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\">\n" +
            "                                <path d=\"M11.254 15.246h-.485a.75.75 0 000 1.5h2.462a.75.75 0 000-1.5h-.477v-3.782a.75.75 0 00-.75-.75h-1.226a.75.75 0 000 1.5h.476v3.032z\" fill=\"#323232\"/>\n" +
            "                                <circle cx=\"13.383\" cy=\"6.883\" r=\".383\" fill=\"#323232\" transform=\"translate(-23.528 -9.843) scale(2.63039)\"/>\n" +
            "                            </svg>\n" +
            "                        </a>\n" +
            "                    </div>\n" +
            "                </div>";

        let patternItem = document.createElement("div");
        patternItem.classList.add("item", "item-pattern");
        patternItem.innerHTML = content.trim();
        document.getElementById("communityItems").appendChild(patternItem);
        tippy('[data-tippy-content]');
    }


}
