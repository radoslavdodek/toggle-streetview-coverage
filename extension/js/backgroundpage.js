(function() {
    chrome.browserAction.onClicked.addListener(function(tab) {
        if (tab.url.includes("google.com/maps")) {
            chrome.tabs.executeScript({
                file: "js/content.js"
            });
        }
    });

    chrome.runtime.onInstalled.addListener(function() {
      chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
          {
            conditions: [
              new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { urlContains: 'google.com/maps' },
              })
            ],
            // Shows the extension's page action.
            actions: [ new chrome.declarativeContent.ShowPageAction() ]
          }
        ]);
      });
    });

})();