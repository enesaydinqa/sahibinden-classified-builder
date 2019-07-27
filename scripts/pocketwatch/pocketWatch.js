async function pocketWatchFormFill(isGet) {

    console.log("İkinci El ve Sıfır Alışveriş > Saat > Cep Saati");

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
        inputs.set(data.Generic.ClassifiedDetail, "<p>".concat(randomGenerate(700)).concat("</p>"));

        inputs.forEach(function (value, key) {
            const input = document.querySelector(key);
            input.value = value;
            input.dispatchEvent(changeEvent);
        });


        if (isGet) {
            await classifiedGETAreaFill(data);
        } else {
            await setPocketWatchClassifiedForm(data);
        }

        await postRulesCheck(data);
    });
}


async function setPocketWatchClassifiedForm(objects) {

    const changeEvent = new Event('change', {
        bubbles: true
    });

    const addClassifiedPrice = document.querySelector(objects.Generic.ClassifiedPrice); // Fiyat
    addClassifiedPrice.value = randomNumberGenerate(3);
    addClassifiedPrice.dispatchEvent(changeEvent);

    const statusSelect = document.getElementsByName(objects.Generic.Condition)[0]; // Durumu
    const statusSelectItems = statusSelect.options.length;
    statusSelect.selectedIndex = Math.floor(Math.random() * (statusSelectItems - 1)) + 1;
    statusSelect.dispatchEvent(changeEvent);

    await selectAddresses(objects,false);
}

