async function pocketWatchFormFill(isGet) {

    console.log("İkinci El ve Sıfır Alışveriş > Saat > Cep Saati");

    const changeEvent = new Event('change', {
        bubbles: true
    });


    // INPUTS

    let inputs = new Map();

    inputs.set("[name='addClassifiedTitle']", randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8))));
    inputs.set("[name='addClassifiedDetail']  textarea", "<p>".concat(randomGenerate(700)).concat("</p>"));

    inputs.forEach(function (value, key) {
        const input = document.querySelector(key);
        input.value = value;
        input.dispatchEvent(changeEvent);
    });


    if (isGet) {
        await classifiedGETAreaFill();
    } else {
        await setPocketWatchClassifiedForm();
    }

    await postRulesCheck();
}


async function setPocketWatchClassifiedForm() {

    const changeEvent = new Event('change', {
        bubbles: true
    });

    const addClassifiedPrice = document.getElementsByName("addClassifiedPrice")[0]; // Fiyat
    addClassifiedPrice.value = randomNumberGenerate(3);
    addClassifiedPrice.dispatchEvent(changeEvent);

    const statusSelect = document.getElementsByName("condition")[0]; // Durumu
    const statusSelectItems = statusSelect.options.length;
    statusSelect.selectedIndex = Math.floor(Math.random() * (statusSelectItems - 1)) + 1;
    statusSelect.dispatchEvent(changeEvent);

    await selectAddresses(false);
}

