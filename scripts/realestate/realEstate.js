async function realEstateFormFill() {

    console.log("Emlak > Konut > Satılık > Daire");

    const changeEvent = new Event('change', {
        bubbles: true
    });

    // INPUTS

    let inputs = new Map();

    inputs.set("[name='addClassifiedTitle']", randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8))));
    inputs.set("[name='addClassifiedDetail']  textarea", "<p>".concat(randomGenerate(500)).concat("</p>"));
    inputs.set("[name='addClassifiedPrice']", randomNumberGenerate(2).concat(".").concat(randomNumberGenerate(3)));
    inputs.set("[name='a24']", randomNumberGenerate(3));
    inputs.set("[name='a107889']", randomNumberGenerate(2));
    inputs.set("[name='a104239']", randomNumberGenerate(3));

    inputs.forEach(function (value, key) {
        const input = document.querySelector(key);
        input.value = value;
        input.dispatchEvent(changeEvent);
    });

    // CHECKBOXES

    let checkboxes = ["[name='a103713']", "[name='a1966']", ".post-detailed-information [type='checkbox']"];

    checkboxes.forEach(function (selector) {

        const checkbox = document.querySelectorAll(selector);

        checkbox.forEach(check => {
            const random_boolean = Math.random() >= 0.5;

            if (random_boolean) {
                check.click();
            }
        })
    });

    await selectAddresses(true);

    // SELECT BOXES

    let selectBoxes = ['a20', 'a812', 'a811', 'a810', 'a23', 'a22', 'a106960', 'a98426', 'exchange'];

    selectBoxes.forEach(function (elementName) {
        const select = document.getElementsByName(elementName)[0];
        const selectItems = select.options.length;
        select.selectedIndex = Math.floor(Math.random() * (selectItems - 1)) + 1;
        select.dispatchEvent(changeEvent);
    });

    await postRulesCheck();
}