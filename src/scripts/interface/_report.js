import {elementExist} from "./_helper";

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
            console.log(serialize(formData));
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

const serialize = (data) => {
    let objectData = {};
    for (let [key, value] of data) {
        objectData[key] = value;
    }
    return objectData;
}