import {elementExist} from "./_helper";
import "firebase/firestore";
import firebase from "firebase";

export const reportHandler = () => {
    readForm();
    disableButton();
}

const readForm = () => {
    const reportForm = document.getElementById("report__form");
    if(elementExist(reportForm)){
        reportForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let formData = new FormData(this);
            storeData(serialize(formData));
            removeInput();
        });
    }
}

const disableButton = () => {
    const reportInputFields = document.querySelectorAll(".form__text-field");
    const reportTopic = document.getElementById("report__topic__input");
    const reportSolution = document.getElementById("report__solution__input");
    const reportSubmit = document.getElementById("report__submit");
    if(elementExist(reportInputFields)){
        for(const reportInputField of reportInputFields){
            reportInputField.addEventListener('keyup', () => {
                if(reportTopic.value == null || reportTopic.value == "" || reportSolution.value == null || reportSolution.value == ""){
                    reportSubmit.disabled = true;
                }else{
                    reportSubmit.disabled = false;
                }
            })
        }
    }
}

const removeInput = () => {
    const reportTopic = document.getElementById("report__topic__input");
    if(elementExist(reportTopic)){
        reportTopic.value = ""
    }
    const reportSolution = document.getElementById("report__solution__input");
    if(elementExist(reportSolution)){
        reportSolution.value = ""
    }
    const reportSubmit = document.getElementById("report__submit");
    if(elementExist(reportSubmit)){
        reportSubmit.disabled = true;
    }
}

const serialize = (data) => {
    let objectData = {};
    for (let [key, value] of data) {
        objectData[key] = value;
    }
    return objectData;
}

const getURl = async () => {
    return new Promise(async (resolve, reject) => {
        try{
            chrome.storage.local.get(["currentDomain"], (result) => {
                return resolve(result.currentDomain);
            });
        }catch (err){
            console.log(err)
            return  reject(undefined);
        }
    })
}

const storeData = async (data) =>{
    try{
        let currentSite = await getURl();;
        data["siteName"] = currentSite;
        await firebase.firestore().collection(currentSite).add(data);
    }catch (err){
        console.log(err);
    }
}