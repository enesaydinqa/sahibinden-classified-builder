document.getElementById("header").textContent = "Select Category";

const button = document.getElementById("save");

button.addEventListener('click', function () {

    const checkedCategory = getCheckedCategory();

    const header = $('#header');

    if (checkedCategory !== null) {
        header.css("background-color", "");
        header.html(checkedCategory);
    } else {
        header.css("background-color", "#ff1b00");
        header.html("Please Select Category");
    }

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

    const radioButtons = document.querySelectorAll("[name='category']");

    let checkedCategory = null;

    radioButtons.forEach(radioButton => {
        if (radioButton.checked === true) {
            checkedCategory = radioButton.value;
        }
    });

    return checkedCategory;
}