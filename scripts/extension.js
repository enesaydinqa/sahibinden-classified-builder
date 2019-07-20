document.getElementById('header').textContent = "Select Category";

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

    const realestate = document.getElementById("realestate-free");
    const pocketWatch = document.getElementById("pocket-watch");

    const isCheckedRealestate = realestate.checked;
    const isCheckedPocketWatch = pocketWatch.checked;

    if (isCheckedRealestate) {
        return realestate.value;
    } else if (isCheckedPocketWatch) {
        return pocketWatch.value;
    }
}