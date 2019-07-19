document.getElementById('header').textContent = "Select Category";

var button = document.getElementById("save");

button.addEventListener('click', function () {

    var checkedCategory = getCheckedCategory();

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

    var realestate = document.getElementById("realestate-free");
    var pocketWatch = document.getElementById("pocket-watch");

    var isCheckedRealestate = realestate.checked;
    var isCheckedPocketWatch = pocketWatch.checked;

    if (isCheckedRealestate) 
    {
        return realestate.value;
    } else if (isCheckedPocketWatch)
    {
        return pocketWatch.value;
    }
}