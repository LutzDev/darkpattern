window.onload = () => {
    chrome.storage.local.set({"currentDomain": document.domain});

}

/*

chrome.extension.onMessage.addListener(function(msg, sender) {
    if (msg.action == 'urlUpdated') {
        console.log("URL der seite:"+ document.domain)
        chrome.storage.local.set({"currentDomain": [document.domain]});
    }
    if (msg.action == 'tabChanged') {
        console.log("URL der seite:"+ document.domain)
        chrome.storage.local.set({"currentDomain": [document.domain]});
    }
});

*/