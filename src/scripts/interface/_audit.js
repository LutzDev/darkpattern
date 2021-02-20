import {elementExist, getSettingStatus, loadCurrentURL, trimUrl} from "./_helper";
import CookiePattern from "./CookiePattern";
import AdvertismentPattern from "./AdvertismentPattern";
import CommunityPattern from "./CommunityPattern";
import firebase from 'firebase/app';
import 'firebase/firestore';



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