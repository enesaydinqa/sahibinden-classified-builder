async function mobilePhoneFormFill(isGet) {

    console.log("İkinci El ve S. > Cep Telefonu > Modeller > (Hepsi)");

    const changeEvent = new Event('change', {
        bubbles: true
    });

    var init = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        mode: 'cors',
        cache: 'default'
    };

    const url = chrome.extension.getURL(Resources.DOM_ELEMENTS_JSON_PATH);

    let request = new Request(url, init);

    fetch(request)
        .then(function (resp) {
            return resp.json();
        }).then(async function (data) {

        // INPUTS

        let inputs = new Map();

        inputs.set(data.Generic.ClassifiedTitle, randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8))));
        inputs.set(data.Generic.ClassifiedDetail, "<p>".concat(randomGenerate(500)).concat("</p>"));

        inputs.forEach(function (value, key) {
            const input = document.querySelector(key);
            input.value = value;
            input.dispatchEvent(changeEvent);
        });

        // SELECT BOXES

        let selectBoxes = [
            data.MobilePhone.OS,
            data.MobilePhone.InternalMemory,
            data.MobilePhone.ScreenSize,
            data.MobilePhone.RAMMemory,
            data.MobilePhone.Camera,
            data.MobilePhone.FrontCamera,
            data.MobilePhone.Color,
            data.MobilePhone.RecordType,
            data.MobilePhone.Warranty
        ];

        selectBoxes.forEach(function (elementName) {

            const select = document.querySelector(elementName);

            if (typeof (select) != 'undefined' && select != null) {
                const selectBoxItems = select.options.length;
                select.selectedIndex = Math.floor(Math.random() * (selectBoxItems - 1)) + 1;
                select.dispatchEvent(changeEvent);
            }
        });

        await sleep(1000);

        const warrantyType = document.querySelector(data.MobilePhone.WarrantyType);
        const warrantyTypeSelectItems = warrantyType.options.length;
        warrantyType.selectedIndex = Math.floor(Math.random() * (warrantyTypeSelectItems - 1)) + 1;
        warrantyType.dispatchEvent(changeEvent);

        // CHECKBOXES

        const checkbox = document.querySelectorAll(data.Generic.PostDetailInformation);

        checkbox.forEach(check => {
            const random_boolean = Math.random() >= 0.5;

            if (random_boolean) {
                check.click();
            }
        });

        if (isGet) {
            await classifiedGETAreaFill(data);
        } else {
            await setMobilePhoneClassifiedForm(data);
        }

        await postRulesCheck(data);
    });
}

async function setMobilePhoneClassifiedForm(objects) {

    const changeEvent = new Event('change', {
        bubbles: true
    });

    const addClassifiedPrice = document.querySelector(objects.Generic.ClassifiedPrice);
    addClassifiedPrice.value = randomNumberGenerate(3);
    addClassifiedPrice.dispatchEvent(changeEvent);

    let selectBoxes = [objects.Generic.Condition, objects.Generic.Exchange];

    selectBoxes.forEach(function (elementName) {

        const select = document.getElementsByName(elementName)[0];

        if (typeof (select) != 'undefined' && select != null) {
            const selectBoxItems = select.options.length;
            select.selectedIndex = Math.floor(Math.random() * (selectBoxItems - 1)) + 1;
            select.dispatchEvent(changeEvent);
        }
    });

    await selectAddresses(objects,false);
}