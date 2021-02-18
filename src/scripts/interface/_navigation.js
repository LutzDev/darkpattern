import {toggleClass, elementExist, getText} from "./_helper";
import {auditHandler} from "./_audit";
import {settingsHandler} from "./_setting";
import tippy from "tippy.js";
import {reportHandler} from "./_report";

const defaultView = (element) => {
    routing(element);
    toggleClass(element, "active");
}

export const navHandler = () => {
    const navItems = document.querySelectorAll(".navigation__item");
    if(elementExist(navItems)){
        defaultView(navItems[0])
        for(const navItem of navItems){
            navItem.addEventListener("click",  function (){
                routing(this);
                toggleClass(this, "active");
            });
        }
    }
}



const routing = (element) => {
    if (element.getAttribute("id") === "item-audit") {
        fetchHtmlContent("audit");
    }else if(element.getAttribute("id") === "item-report"){
        fetchHtmlContent("report");
    }else if(element.getAttribute("id") === "item-setting"){
        fetchHtmlContent("setting");
    }
}

const fetchHtmlContent = async (htmlFile) => {
    const midContainer = document.getElementById("midContainer");


    if(elementExist(midContainer)){
        fetch('../interfaces/'+htmlFile+'.html')
            .then(function(response) {
                return response.text();
            })
            .then(function(body) {
                midContainer.innerHTML = body;
            }).then(()=>{
                getText();
         }).then(()=>{
            if(htmlFile == "audit"){
                console.log("Analysis aufgerufen");
                auditHandler();
            }else if(htmlFile == "report"){
                console.log("Report aufgerufen");
                reportHandler();
            }else if(htmlFile == "setting"){
                console.log("Setting aufgerufen");
                //settingsHandler();
            }
        });
    }
}