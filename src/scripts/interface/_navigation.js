import {elementExist} from "./_helper";
import {auditHandler} from "./_audit";
import {settingsHandler} from "./_setting";
import tippy from "tippy.js";


export const navHandler = () => {
    const navItems = document.querySelectorAll(".navigation__item");
    if(elementExist(navItems)){
        routing(navItems[0]);
        navItems.forEach(navItem => {
            tippy(navItem, {
                content: 'Lorem iasduhsdf usdhf oassdhu ssdf hsdfh pas uhds osdj jasih sjgj oisj ',
                animation: 'scale'
            })
            navItem.addEventListener("click",  function (){
                routing(this);
            });
        });
    }
}

const routing = (element) => {

    if (element.getAttribute("id") == "navigation-analysis") {
        fetchHtmlContent("analysis");
    }else if(element.getAttribute("id") == "navigation-report"){
        fetchHtmlContent("report");
    }else if(element.getAttribute("id") == "navigation-setting"){
        fetchHtmlContent("setting");
    }else{
        console.error("no id found (analysis, report, setting)")
    }
}

const fetchHtmlContent = htmlFile => {
    const midContainer = document.getElementById("midContainer");
    fetch('../interfaces/'+htmlFile+'.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(body) {
            midContainer.innerHTML = body;
        })
        .then(()=>{
            if(htmlFile == "analysis"){
                console.log("Analysis aufgerufen");
                auditHandler();
            }else if(htmlFile == "report"){
                console.log("Report aufgerufen");
            }else if(htmlFile == "setting"){
                console.log("Setting aufgerufen");
                settingsHandler();
            }
        });
}