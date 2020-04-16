document.getElementById("header").textContent = "Select Category";

const button = document.getElementById("save");
const categorySelectButton = document.querySelectorAll(".step-by-step");

button.addEventListener('click', function () {

    const checkedCategory = getCheckedCategory();

    const header = $("#header");

    if (checkedCategory !== null) {
        header.css("background-color", "");
        header.css("color", "#000000");
        header.html(checkedCategory);
    } else {
        header.css("background-color", "#ff1b00");
        header.css("color", "#f0f4f9");
        header.html("Please Select Category");
    }

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "data": checkedCategory
        }, function () {
            console.log('success');
        });
    });

});


categorySelectButton.forEach(function (elem) {
    elem.addEventListener("click", function (el) {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                "data": el.target.name
            }, function () {
                console.log('success');
            });
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