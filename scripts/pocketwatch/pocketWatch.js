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
        await setPocketWatchGetClassifiedForm();
    } else {
        await setPocketWatchClassifiedForm();
    }

    await postRulesCheck();
}

async function setPocketWatchGetClassifiedForm() {

    const changeEvent = new Event('change', {
        bubbles: true
    });


    const statusSelect = document.getElementsByName("itemCondition")[0]; // Durumu
    const statusSelectItems = statusSelect.options.length;
    statusSelect.selectedIndex = Math.floor(Math.random() * (statusSelectItems - 1)) + 1;
    statusSelect.dispatchEvent(changeEvent);


    const stockCount = document.getElementsByName("addClassifiedQuantity")[0]; // Stok Adedi
    stockCount.value = randomNumberGenerate(3);
    stockCount.dispatchEvent(changeEvent);


    const salesPriceOfProduct = document.getElementsByName("pricingAndInstallment")[0]; // Ürünün Satış Fiyatı
    salesPriceOfProduct.value = randomNumberGenerate(3);
    salesPriceOfProduct.dispatchEvent(changeEvent);


    const countrySelect = document.querySelector(".shipping-from-where > select:nth-child(2)"); // Ülke
    const citySelect = document.querySelector(".shipping-from-where > select:nth-child(4)"); // Şehir

    const countrySelectItems = countrySelect.options.length;
    countrySelect.selectedIndex = Math.floor(Math.random() * (countrySelectItems - 1)) + 1;
    countrySelect.dispatchEvent(changeEvent);
    await sleep(800);

    const citySelectItems = citySelect.options.length;
    citySelect.selectedIndex = Math.floor(Math.random() * (citySelectItems - 1)) + 1;
    citySelect.dispatchEvent(changeEvent);



    // CHECKBOXES

    let checkboxes = [".shipping-price [type='radio']", ".cargo-destination [type='radio']", "[name='addClassifiedCargo'] [type='checkbox']", "[name='addCargoRefundCourier'] [type='checkbox']"];

    checkboxes.forEach(function (selector) {

        const checkbox = document.querySelectorAll(selector);

        checkbox.forEach(checkbox => {
            const random_boolean = Math.random() >= 0.5;

            if (random_boolean) {
                checkbox.click();
            }
        })

    });



    const cargoDeliveryDurationSelect = document.getElementsByName("cargoDeliveryDuration")[0]; // Kargoya Veriliş Süresi
    const cargoDeliveryDurationSelectItems = cargoDeliveryDurationSelect.options.length;
    cargoDeliveryDurationSelect.selectedIndex = Math.floor(Math.random() * (cargoDeliveryDurationSelectItems - 1)) + 1;
    cargoDeliveryDurationSelect.dispatchEvent(changeEvent);


    const cargoNoteForTextArea = document.querySelector(".cargo-note-for textarea"); // Alıcılar için Kargo Notunuz (isteğe bağlı)
    cargoNoteForTextArea.value = randomGenerate(150);
    cargoNoteForTextArea.dispatchEvent(changeEvent);


    const salesContractCheckbox = document.getElementsByName("salesContract")[0]; // Satış Kontratı
    salesContractCheckbox.click();

    if (salesContractCheckbox.checked === false) {
        salesContractCheckbox.click();
        salesContractCheckbox.dispatchEvent(changeEvent);
    }


    const thirdPartyMarketplaceAgreementCheckbox = document.getElementsByName("thirdpartyMarketplaceAgreement")[0]; // Üçüncü Taraf Pazar Yeri Sözleşmesi
    thirdPartyMarketplaceAgreementCheckbox.click();

    if (thirdPartyMarketplaceAgreementCheckbox.checked === false) {
        thirdPartyMarketplaceAgreementCheckbox.click();
        thirdPartyMarketplaceAgreementCheckbox.dispatchEvent(changeEvent);
    }
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

