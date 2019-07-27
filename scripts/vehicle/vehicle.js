async function vehicleFormFill() {
    console.log("Vasıta > Otomobil");

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
        inputs.set(data.Generic.ClassifiedPrice, randomNumberGenerate(2).concat(".").concat(randomNumberGenerate(3)));
        inputs.set(data.Vehicle.KM, randomNumberGenerate(2).concat(".").concat(randomNumberGenerate(3)));

        inputs.forEach(function (value, key) {
            const input = document.querySelector(key);
            input.value = value;
            input.dispatchEvent(changeEvent);
        });

        // SELECT BOXES

        let selectBoxes = [
            data.Vehicle.Color,
            data.Vehicle.Warranty,
            data.Vehicle.Nationality,
            data.Vehicle.Exchange
        ];

        selectBoxes.forEach(function (elementName) {

            const select = document.querySelector(elementName);

            if (typeof (select) != 'undefined' && select != null) {
                const selectBoxItems = select.options.length;
                select.selectedIndex = Math.floor(Math.random() * (selectBoxItems - 1)) + 1;
                select.dispatchEvent(changeEvent);
            }
        });

        await selectAddresses(data,false);

        // CHECKBOXES

        let checkboxes = [data.Generic.PostDetailInformation, data.Vehicle.PostDetailInformation];

        checkboxes.forEach(check => {

            const checkbox = document.querySelectorAll(check);

            checkbox.forEach(checkbox => {

                const random_boolean = Math.random() >= 0.5;

                if (random_boolean) {
                    checkbox.click();
                }
            });
        });

        await postRulesCheck(data);

    });
}