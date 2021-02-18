import {elementExist} from "./_helper";

export const reportHandler = () => {
    readForm();
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

const serialize = (data) => {
    let objectData = {};
    for (let [key, value] of data) {
        objectData[key] = value;
    }
    return objectData;
}