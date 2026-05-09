document.getElementById("darkBtn").addEventListener("click", async () => {

    let tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },

        func: darkMode
    });

});

function darkMode() {

    document.body.style.background = "black";
    document.body.style.color = "white";

}