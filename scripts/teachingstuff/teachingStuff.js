async function teachingStuffFormFill() {

    console.log("Özel Ders Verenler");

    const changeEvent = new Event('change', {
        bubbles: true
    });


    var init = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        mode: 'cors',
        cache: 'default'
    };

    const url = chrome.extension.getURL(resources.DOM_ELEMENTS_JSON_PATH);

    let request = new Request(url, init);

    fetch(request)
        .then(function (resp) {
            return resp.json();
        }).then(async function (data) {

        // INPUTS

        let inputs = new Map();

        inputs.set(data.Generic.ClassifiedTitle, randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8))));
        inputs.set(data.Generic.ClassifiedDetail, "<p>".concat(randomGenerate(500)).concat("</p>"));
        inputs.set(data.Generic.ClassifiedPrice, randomNumberGenerate(1).concat(".").concat(randomNumberGenerate(3)));

        inputs.forEach(function (value, key) {
            const input = document.querySelector(key);
            input.value = value;
            input.dispatchEvent(changeEvent);
        });


        // SELECT BOXES

        let selectBoxes = [
            data.TeachingStuff.Education,
            data.TeachingStuff.EducationAbout,
            data.TeachingStuff.Gender
        ];

        selectBoxes.forEach(function (elementName) {

            const select = document.querySelector(elementName);

            if (typeof (select) != 'undefined' && select != null) {
                const selectItems = select.options.length;
                select.selectedIndex = Math.floor(Math.random() * (selectItems - 1)) + 1;
                select.dispatchEvent(changeEvent);
            }
        });


        // CHECKBOXES

        let checkboxes = [data.TeachingStuff.DetailAttribute];

        checkboxes.forEach(function (selector) {

            const checkbox = document.querySelectorAll(selector);

            checkbox.forEach(check => {
                const random_boolean = Math.random() >= 0.5;

                if (random_boolean) {
                    check.click();
                }
            })
        });

        await selectAddresses(data, false);
        await postRulesCheck(data);
    });
}


async function stepByStepTeachingStuffCategorySelect() {

    let isClosedDraftPopup = false;

    for (var i = 0; i <= 1; i++) {

        let stepByStepCategoryIndex = [7, randomNumberGenerate(1)];
        let category = ".category-select-box div[scrollbar='category_select_scrollbar" + i + "'] li:nth-child(" + stepByStepCategoryIndex[i] + ")";

        ready(category, function (element) {
            element.click();
        });

        if (!isClosedDraftPopup) {
            let popUp = "div[class='dialog-content  dialogEffect'] .dialog-buttons > button:nth-child(2)";

            ready(popUp, function (element) {
                element.click();
                isClosedDraftPopup = true;
            });
        }
    }
    ready(".process-done button", function (element) {
        element.click();
    });
}