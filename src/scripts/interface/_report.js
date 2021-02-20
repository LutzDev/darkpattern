import {countLetter, elementExist, notification} from "./_helper";
import firebase from 'firebase/app';
import 'firebase/firestore';

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
    const reportSubmit = document.getElementById("report__submit");
    const reportTopic = document.getElementById("report__topic__input");
    const reportSolution = document.getElementById("report__solution__input");
    const counterTextarea = document.getElementById("text__counter-textarea");
    const counterInput = document.getElementById("text__counter-input");
    if(elementExist(reportInputFields)){
        for(const reportInputField of reportInputFields){
            reportInputField.addEventListener('keyup', function () {
                countLetter(this);
                if(reportTopic.value == null || reportTopic.value == "" || reportSolution.value == null || reportSolution.value == "" || (counterTextarea.classList.contains("warning")) ||  (counterInput.classList.contains("warning"))){
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
        countLetter(reportTopic);
    }
    const reportSolution = document.getElementById("report__solution__input");
    if(elementExist(reportSolution)){
        reportSolution.value = ""
        countLetter(reportSolution);
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
    let currentSite = String(await getURl());
    data["siteName"] = currentSite;
    await firebase.firestore().collection(currentSite).add(data).then(ref =>{
        notification(`Du hast den Dark Pattern erfolgreich mit der Community geteilt. Vielen Dank!`, "success");
    }).catch((error) => {
        notification(`Es ist ein Fehler aufgetreten: ${error}`, "error");
    });
}