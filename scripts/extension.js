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
    const pocketWatchGET = document.getElementById("pocket-watch-get");
    const teachingStuff = document.getElementById("teaching-stuff");
    const mobilePhone = document.getElementById("mobile-phone");
    const mobilePhoneGET = document.getElementById("mobile-phone-get");

    const isCheckedRealEstate = realEstate.checked;
    const isCheckedPocket = pocketWatch.checked;
    const isCheckedPocketWatch = pocketWatchGET.checked;
    const isTeachingStuff = teachingStuff.checked;
    const isMobilePhone = mobilePhone.checked;
    const isMobilePhoneGET = mobilePhoneGET.checked;

    if (isCheckedRealEstate) {
        return realEstate.value;
    } else if (isCheckedPocket) {
        return pocketWatch.value;
    } else if (isCheckedPocketWatch) {
        return pocketWatchGET.value;
    } else if (isTeachingStuff) {
        return teachingStuff.value;
    } else if (isMobilePhone) {
        return mobilePhone.value;
    } else if (isMobilePhoneGET) {
        return mobilePhoneGET.value;
    }
}