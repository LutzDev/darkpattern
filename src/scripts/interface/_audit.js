import {elementExist, getSettingStatus, loadCurrentURL, trimUrl} from "./_helper";
import CookiePattern from "./CookiePattern";
import AdvertismentPattern from "./AdvertismentPattern";
import CommunityPattern from "./CommunityPattern";
import firebase from 'firebase/app';
import 'firebase/firestore';



export const auditHandler = async () => {
    setUrl();
    loadCookiePattern();
    if(await getSettingStatus("switch__community")){
        loadCommunityReport();
    }
}

const setUrl = async () => {
    const currentSites = document.querySelectorAll(".currentSite__titel");
    if(elementExist(currentSites)){
        for(const currentSite of currentSites){
            currentSite.innerText = trimUrl(await loadCurrentURL());
        }
    }
}


const loadCookiePattern = async () => {
    const currentSitesCounter = document.getElementById("currentSite__counter");
    if(await getSettingStatus("cookieDetected")){
        new CookiePattern(1);
        if (elementExist(currentSitesCounter)){
            currentSitesCounter.innerHTML="1";
        }
    }else{
        currentSitesCounter.innerHTML="Keine";
    }
}



const loadCommunityReport = async () => {
    let communityData = await getData(await loadCurrentURL());
    if(elementExist(communityData) && communityData.length > 0){
        for(const communityItem of communityData){
            new CommunityPattern(communityItem.patternTopic, communityItem.patternDescription);
        }
    }
}

const getData = (currentUrl) => {
    return new Promise(async (resolve, reject) => {
        try{
            const snapshot = await firebase.firestore().collection(currentUrl).get()
            return resolve(snapshot.docs.map(doc => doc.data()));
        }catch (err){
            return reject(err);
        }
    })
}