import {elementExist, getSettingStatus, loadCurrentURL} from "./_helper";
import CookiePattern from "./CookiePattern";
import AdvertismentPattern from "./AdvertismentPattern";
import firebase from "firebase";
import CommunityPattern from "./CommunityPattern";


export const auditHandler = async () => {
    setUrl();
    if(await getSettingStatus("switch__community")){
        loadCommunityReport();
    }
    new CookiePattern(2);
    new AdvertismentPattern(4);
}

const setUrl = async () => {
    const currentSites = document.querySelectorAll(".currentSite__titel");
    if(elementExist(currentSites)){
        for(const currentSite of currentSites){
            currentSite.innerText = trimUrl(await loadCurrentURL());
        }
    }
}

const trimUrl = (url) => {
    return url.replace(/^(https?:\/\/)?(www\.)?/,'');
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