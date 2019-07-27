async function vehicleFormFill() {
    console.log("Vasıta > Otomobil");

    const changeEvent = new Event('change', {
        bubbles: true
    });

    // INPUTS

    let inputs = new Map();

    inputs.set("[name='addClassifiedTitle']", randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8))));
    inputs.set("[name='addClassifiedDetail']  textarea", "<p>".concat(randomGenerate(500)).concat("</p>"));
    inputs.set("[name='addClassifiedPrice']", randomNumberGenerate(2).concat(".").concat(randomNumberGenerate(3)));
    inputs.set("[name='a4']", randomNumberGenerate(2).concat(".").concat(randomNumberGenerate(3)));

    inputs.forEach(function (value, key) {
        const input = document.querySelector(key);
        input.value = value;
        input.dispatchEvent(changeEvent);
    });

    // SELECT BOXES

    let selectBoxes = [
        "[an-form-object-name='Renk']",
        "[an-form-object-name='Garanti']",
        "[an-form-object-name='Plaka / Uyruk']",
        "[an-form-object-name='Takaslı']"
    ];

    selectBoxes.forEach(function (elementName) {

        const select = document.querySelector(elementName);

        if (typeof (select) != 'undefined' && select != null) {
            const selectBoxItems = select.options.length;
            select.selectedIndex = Math.floor(Math.random() * (selectBoxItems - 1)) + 1;
            select.dispatchEvent(changeEvent);
        }
    });

    await selectAddresses(false);

    // CHECKBOXES

    let checkboxes = [".post-detailed-information input[type='checkbox']", ".post-detailed-information input[type='radio']"];

    checkboxes.forEach(check => {

        const checkbox = document.querySelectorAll(check);

        checkbox.forEach(checkbox => {

            const random_boolean = Math.random() >= 0.5;

            if (random_boolean) {
                checkbox.click();
            }
        });
    });

    await postRulesCheck();
}