async function classifiedGETAreaFill() {

    const changeEvent = new Event('change', {
        bubbles: true
    });

    var myInit = {
        method: 'GET',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        mode: 'cors',
        cache: 'default'
    };

    const url = chrome.extension.getURL('resources/GET-Classified-Elements.json');

    let myRequest = new Request(url, myInit);

    await fetch(myRequest)
        .then(function (resp) {
            return resp.json();
        })
        .then(async function (data) {

            const statusSelect = document.getElementsByName(data.itemCondition)[0]; // Durumu
            const statusSelectItems = statusSelect.options.length;
            statusSelect.selectedIndex = Math.floor(Math.random() * (statusSelectItems - 1)) + 1;
            statusSelect.dispatchEvent(changeEvent);


            const stockCount = document.getElementsByName(data.addClassifiedQuantity)[0]; // Stok Adedi
            stockCount.value = randomNumberGenerate(3);
            stockCount.dispatchEvent(changeEvent);


            const salesPriceOfProduct = document.getElementsByName(data.pricingAndInstallment)[0]; // Ürünün Satış Fiyatı
            salesPriceOfProduct.value = randomNumberGenerate(3);
            salesPriceOfProduct.dispatchEvent(changeEvent);


            const countrySelect = document.querySelector(data.Country); // Ülke
            const citySelect = document.querySelector(data.City); // Şehir

            const countrySelectItems = countrySelect.options.length;
            countrySelect.selectedIndex = Math.floor(Math.random() * (countrySelectItems - 1)) + 1;
            countrySelect.dispatchEvent(changeEvent);
            await sleep(1000);

            const citySelectItems = citySelect.options.length;
            citySelect.selectedIndex = Math.floor(Math.random() * (citySelectItems - 1)) + 1;
            citySelect.dispatchEvent(changeEvent);


            // CHECKBOXES

            let checkboxes = [data.shippingPrice, data.cargoDestination, data.addClassifiedCargo, data.addCargoRefundCourier];

            checkboxes.forEach(function (selector) {

                const checkbox = document.querySelectorAll(selector);

                checkbox.forEach(checkbox => {
                    const random_boolean = Math.random() >= 0.5;

                    if (random_boolean) {
                        checkbox.click();
                    }
                })
            });


            const cargoDeliveryDurationSelect = document.getElementsByName(data.cargoDeliveryDuration)[0]; // Kargoya Veriliş Süresi
            const cargoDeliveryDurationSelectItems = cargoDeliveryDurationSelect.options.length;
            cargoDeliveryDurationSelect.selectedIndex = Math.floor(Math.random() * (cargoDeliveryDurationSelectItems - 1)) + 1;
            cargoDeliveryDurationSelect.dispatchEvent(changeEvent);


            const cargoNoteForTextArea = document.querySelector(data.cargoNotFore); // Alıcılar için Kargo Notunuz (isteğe bağlı)
            cargoNoteForTextArea.value = randomGenerate(150);
            cargoNoteForTextArea.dispatchEvent(changeEvent);


            const salesContractCheckbox = document.getElementsByName(data.salesContract)[0]; // Satış Kontratı
            salesContractCheckbox.click();

            if (salesContractCheckbox.checked === false) {
                salesContractCheckbox.click();
                salesContractCheckbox.dispatchEvent(changeEvent);
            }


            const thirdPartyMarketplaceAgreementCheckbox = document.getElementsByName(data.thirdPartyMarketplaceAgreement)[0]; // Üçüncü Taraf Pazar Yeri Sözleşmesi
            thirdPartyMarketplaceAgreementCheckbox.click();

            if (thirdPartyMarketplaceAgreementCheckbox.checked === false) {
                thirdPartyMarketplaceAgreementCheckbox.click();
                thirdPartyMarketplaceAgreementCheckbox.dispatchEvent(changeEvent);
            }

        });
}