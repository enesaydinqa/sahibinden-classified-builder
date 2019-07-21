async function mobilePhoneFormFill(isGet) {

    console.log("İkinci El ve S. > Cep Telefonu > Modeller > (Hepsi)");

    const changeEvent = new Event('change', {
        bubbles: true
    });

    // INPUTS

    let inputs = new Map();

    inputs.set("[name='addClassifiedTitle']", randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8))));
    inputs.set("[name='addClassifiedDetail']  textarea", "<p>".concat(randomGenerate(500)).concat("</p>"));

    inputs.forEach(function (value, key) {
        const input = document.querySelector(key);
        input.value = value;
        input.dispatchEvent(changeEvent);
    });

    // SELECT BOXES

    let selectBoxes = [
        "[an-form-object-name='İşletim Sistemi']",
        "[an-form-object-name='Dahili Hafıza']",
        "[an-form-object-name='Ekran Boyutu']",
        "[an-form-object-name='RAM Bellek']",
        "[an-form-object-name='Kamera']",
        "[an-form-object-name='Ön Kamera']",
        "[an-form-object-name='Renk']",
        "[an-form-object-name='Kayıt Türü']",
        "[an-form-object-name='Garanti']"
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
    const warrantyType = document.querySelector("[an-form-object-name='Garanti Türü']");
    const warrantyTypeSelectItems = warrantyType.options.length;
    warrantyType.selectedIndex = Math.floor(Math.random() * (warrantyTypeSelectItems - 1)) + 1;
    warrantyType.dispatchEvent(changeEvent);

    // CHECKBOXES

    const checkbox = document.querySelectorAll(".post-detailed-information [type='checkbox']");

    checkbox.forEach(check => {
        const random_boolean = Math.random() >= 0.5;

        if (random_boolean) {
            check.click();
        }
    });

    if (isGet) {
        await classifiedGETAreaFill();
    } else {
        await setMobilePhoneClassifiedForm();
    }

    await postRulesCheck();
}

async function setMobilePhoneClassifiedForm() {

    const changeEvent = new Event('change', {
        bubbles: true
    });

    const addClassifiedPrice = document.getElementsByName("addClassifiedPrice")[0];
    addClassifiedPrice.value = randomNumberGenerate(3);
    addClassifiedPrice.dispatchEvent(changeEvent);

    let selectBoxes = ["condition", "exchange"];

    selectBoxes.forEach(function (elementName) {

        const select = document.getElementsByName(elementName)[0];

        if (typeof (select) != 'undefined' && select != null) {
            const selectBoxItems = select.options.length;
            select.selectedIndex = Math.floor(Math.random() * (selectBoxItems - 1)) + 1;
            select.dispatchEvent(changeEvent);
        }
    });

    await selectAddresses(false);
}