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

    const radioButtons = document.querySelectorAll(".container [name='category']");

    let checkedCategory = null;

    radioButtons.forEach(checkbox => {
        if (checkbox.checked === true) {
            checkedCategory = checkbox.value;
        }
    });

    return checkedCategory;
}