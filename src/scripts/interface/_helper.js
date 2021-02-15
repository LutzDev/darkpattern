export const elementExist = (element) => {
    if(typeof(element) != 'undefined' && element != null){
        return true;
    }else{
        console.log(element + " nicht gefunden");
        return false;
    }
}