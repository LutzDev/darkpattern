import {toggleClass, elementExist, fillTextData} from "./_helper";
import {auditHandler} from "./_audit";
import {settingsHandler} from "./_setting";
import {reportHandler} from "./_report";


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
const defaultView = (element) => {
    routing(element);
    toggleClass(element, "active");
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
        try{
            const response = await fetch('../interfaces/'+htmlFile+'.html');
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const body = await response.text();
            midContainer.innerHTML = body;
            await fillTextData();
            if(htmlFile == "audit"){
                auditHandler();
            }else if(htmlFile == "report"){
                reportHandler();
            }else if(htmlFile == "setting"){
                settingsHandler();
            }
        }catch(err){
            console.log(err);
        }
    }
}