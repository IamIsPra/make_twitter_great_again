chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // Execute the content script on the specific website
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content_script.js'],
    });
});
