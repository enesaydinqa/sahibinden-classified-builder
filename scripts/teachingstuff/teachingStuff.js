async function teachingStuffFormFill() {

    console.log("Özel Ders Verenler");

    const changeEvent = new Event('change', {
        bubbles: true
    });

    // INPUTS

    let inputs = new Map();

    inputs.set("[name='addClassifiedTitle']", randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8))));
    inputs.set("[name='addClassifiedDetail']  textarea", "<p>".concat(randomGenerate(500)).concat("</p>"));
    inputs.set("[name='addClassifiedPrice']", randomNumberGenerate(1).concat(".").concat(randomNumberGenerate(3)));

    inputs.forEach(function (value, key) {
        const input = document.querySelector(key);
        input.value = value;
        input.dispatchEvent(changeEvent);
    });

    try {
        const select = document.querySelector("select[an-form-object-name='Ders']");
        const selectItems = select.options.length;
        select.selectedIndex = Math.floor(Math.random() * (selectItems - 1)) + 1;
        select.dispatchEvent(changeEvent);
    } catch (err) {
        console.log("This category not appeared selectbox")
    }

    // SELECT BOXES

    let genericSelectBoxes = ["select[an-form-object-name='Ders Yeri'], select[an-form-object-name='Ders Aracı'], select[an-form-object-name='Spor Dalı']", "select[an-form-object-name='Cinsiyet']"];

    genericSelectBoxes.forEach(function (elementName) {
        const select = document.querySelector(elementName);
        const selectItems = select.options.length;
        select.selectedIndex = Math.floor(Math.random() * (selectItems - 1)) + 1;
        select.dispatchEvent(changeEvent);
    });

    // CHECKBOXES

    let checkboxes = [".detail-attributes-container [type='checkbox']"];

    checkboxes.forEach(function (selector) {

        const checkbox = document.querySelectorAll(selector);

        checkbox.forEach(check => {
            const random_boolean = Math.random() >= 0.5;

            if (random_boolean) {
                check.click();
            }
        })
    });

    await selectAddresses(false);
    await postRulesCheck();
}