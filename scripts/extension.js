document.getElementById("header").textContent = "Select Category";

const button = document.getElementById("save");

button.addEventListener('click', function () {

    const checkedCategory = getCheckedCategory();

    $('#header').html(checkedCategory);

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "data": checkedCategory
        }, function (response) {
            console.log('success');
        });
    });

});

function getCheckedCategory() {

    const realEstate = document.getElementById("realestate");
    const pocketWatch = document.getElementById("pocket-watch");
    const pocketWatchGet = document.getElementById("pocket-watch-get");
    const teachingStuff = document.getElementById("teaching-stuff");

    const isCheckedRealEstate = realEstate.checked;
    const isCheckedPocket = pocketWatch.checked;
    const isCheckedPocketWatch = pocketWatchGet.checked;
    const isTeachingStuff = teachingStuff.checked;

    if (isCheckedRealEstate) {
        return realEstate.value;
    } else if (isCheckedPocket) {
        return pocketWatch.value;
    } else if (isCheckedPocketWatch) {
        return pocketWatchGet.value;
    } else if (isTeachingStuff) {
        return teachingStuff.value;
    }
}