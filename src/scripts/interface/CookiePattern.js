import Pattern from "./Pattern";

export default class CookiePattern extends Pattern{
    constructor(counter) {
        super(counter);
        this.createItem();
    }

    createItem = () => {


        let content = "<div class=\"item__info\">\n" +
            "                    <div class=\"icon icon__pattern\">\n" +
            "                        <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" class=\"icon-cookie\">\n" +
            "                            <path d=\"M12.685 2.694A.75.75 0 0012 2.25 9.75 9.75 0 002.25 12 9.75 9.75 0 0012 21.75 9.75 9.75 0 0021.75 12a.75.75 0 00-.75-.75c-1.789 0-3.407-1.353-4.747-2.908-2.164-2.51-3.568-5.648-3.568-5.648zm-1.153 1.069c.493 1.004 1.795 3.483 3.585 5.559 1.443 1.674 3.21 3.058 5.105 3.365a8.25 8.25 0 11-8.69-8.924z\" fill=\"#323232\"/>\n" +
            "                            <circle cx=\"9.868\" cy=\"12.868\" r=\".868\" fill=\"#323232\" transform=\"translate(1.46 -1.515) scale(1.05026)\"/>\n" +
            "                            <circle cx=\"9.868\" cy=\"12.868\" r=\".868\" fill=\"#323232\" transform=\"translate(-2.357 .485) scale(1.05026)\"/>\n" +
            "                            <circle cx=\"9.868\" cy=\"12.868\" r=\".868\" fill=\"#323232\" transform=\"translate(-1.354 -5.515) scale(1.05026)\"/>\n" +
            "                            <circle cx=\"9.868\" cy=\"12.868\" r=\".868\" fill=\"#323232\" transform=\"translate(2.636 2.485) scale(1.05026)\"/>\n" +
            "                        </svg>\n" +
            "                    </div>\n" +
            "                    <p class=\"item__title\">Cookie-Hinweis</p>\n" +
            "                </div>\n" +
            "                <div class=\"item__interaction item__interaction-pattern\">\n" +
            "                    <div data-tooltip data-translate=\"icon__target\" class=\"icon icon__target\">\n" +
            "                        <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\" class=\"icon-target\">\n" +
            "                            <path d=\"M11.25 3.505A8.494 8.494 0 005.97 5.97a8.494 8.494 0 00-2.465 5.28H2a.75.75 0 000 1.5h1.505a8.494 8.494 0 002.465 5.28 8.494 8.494 0 005.28 2.465V22a.75.75 0 001.5 0v-1.505a8.494 8.494 0 005.28-2.465 8.494 8.494 0 002.465-5.28H22a.75.75 0 000-1.5h-1.505a8.494 8.494 0 00-2.465-5.28 8.494 8.494 0 00-5.28-2.465V2a.75.75 0 00-1.5 0v1.505zm1.5 1.507v1.432a.75.75 0 01-1.5 0V5.012a6.99 6.99 0 00-4.219 2.019 6.99 6.99 0 00-2.019 4.219h1.432a.75.75 0 010 1.5H5.012a6.99 6.99 0 002.019 4.219 6.996 6.996 0 004.219 2.019v-1.432a.75.75 0 011.5 0v1.432a6.996 6.996 0 004.219-2.019 6.996 6.996 0 002.019-4.219h-1.432a.75.75 0 010-1.5h1.432a6.996 6.996 0 00-2.019-4.219l-.064-.064a6.994 6.994 0 00-4.155-1.955z\" fill=\"#323232\"/>\n" +
            "                        </svg>\n" +
            "\n" +
            "                    </div>\n" +
            "                    <div data-tooltip data-translate=\"item__counter\" class=\"item__counter\">\n" +
            "                        <p>1</p>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>";


        let patternItem = document.createElement("div");
        patternItem.classList.add("item", "item-pattern");
        patternItem.innerHTML = content.trim();
        document.getElementById("auditItems").appendChild(patternItem);

    }


}
