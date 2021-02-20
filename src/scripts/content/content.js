window.onload = () => {
    /*
    chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {
            switch(message.type) {
                case "getText":
                    sendResponse("load");
                    break;
            }
        }
    );
     */
}



chrome.extension.onMessage.addListener(function(msg, sender) {
    if (msg.action == 'urlUpdated') {
        console.log("urlUpdated content");
        console.log(document.domain);
        chrome.storage.local.set({"currentDomain": document.domain});
    }
    if (msg.action == 'tabChanged') {
        console.log("tabChanged content");
        console.log(document.domain);
        chrome.storage.local.set({"currentDomain": document.domain});
    }
});
