window.onload = async () => {

}




chrome.extension.onMessage.addListener(function(msg, sender) {
    if (msg.action == 'urlUpdated') {
        console.log("urlUpdated content");
        console.log(document.domain);
        chrome.storage.local.set({"currentDomain": document.domain});
        chrome.storage.local.set({"cookieDetected": false});
    }
    if (msg.action == 'tabChanged') {
        console.log("tabChanged content");
        console.log(document.domain);
        chrome.storage.local.set({"currentDomain": document.domain});
        chrome.storage.local.set({"cookieDetected": false});
    }
});
