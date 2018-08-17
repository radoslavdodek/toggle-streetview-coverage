(function() {
    chrome.browserAction.onClicked.addListener(function(tab) {
        if (tab.url.includes("google.com/maps")) {
            chrome.tabs.executeScript({
                file: "js/content.js"
            });
        }
    });

})();