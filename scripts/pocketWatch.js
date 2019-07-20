async function pocketWatchFormFill() {

    console.log("İkinci El ve Sıfır Alışveriş > Saat > Cep Saati");

    const changeEvent = new Event('change', {
        bubbles: true
    });

    const submitEvent = new Event('submit', {
        bubbles: false,
        cancelable: false
    });

    const classifiedTitleEl = document.getElementsByName("addClassifiedTitle")[0]; // İlan Başlığı
    classifiedTitleEl.value = randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8)));
    classifiedTitleEl.dispatchEvent(changeEvent);


    const classifiedDescriptionEl = document.querySelector("[name='addClassifiedDetail']  textarea"); // Açıklama
    classifiedDescriptionEl.value = "<p>".concat(randomGenerate(700)).concat("</p>");
    classifiedDescriptionEl.dispatchEvent(changeEvent);


    const statusSelect = document.getElementsByName("itemCondition")[0]; // Durumu
    const statusSelectItems = statusSelect.options.length;
    statusSelect.selectedIndex = Math.floor(Math.random() * (statusSelectItems - 1)) + 1;
    statusSelect.dispatchEvent(changeEvent);


    const stockCount = document.getElementsByName("addClassifiedQuantity")[0]; // Stok Adedi
    stockCount.value = randomNumberGenerate(3);
    stockCount.dispatchEvent(changeEvent);


    const salesPriceOfProduct = document.getElementsByName("pricingAndInstallment")[0]; // Ürünün Satış Fiyatı
    salesPriceOfProduct.value = randomNumberGenerate(3);
    salesPriceOfProduct.focus();
    salesPriceOfProduct.dispatchEvent(changeEvent);


    const shippingPriceRadioButtons = document.querySelectorAll(".shipping-price [type='radio']"); // Kargo Ücreti

    shippingPriceRadioButtons.forEach(check => {

        const random_boolean = Math.random() >= 0.5;

        if (random_boolean) {
            check.click();
        }
    });


    const countrySelect = document.querySelector(".shipping-from-where > select:nth-child(2)"); // Ülke
    const citySelect = document.querySelector(".shipping-from-where > select:nth-child(4)"); // Şehir

    const countrySelectItems = countrySelect.options.length;
    countrySelect.selectedIndex = Math.floor(Math.random() * (countrySelectItems - 1)) + 1;
    countrySelect.dispatchEvent(changeEvent);
    await sleep(800);

    const citySelectItems = citySelect.options.length;
    citySelect.selectedIndex = Math.floor(Math.random() * (citySelectItems - 1)) + 1;
    citySelect.dispatchEvent(changeEvent);


    const cargoDestinationRadioButtons = document.querySelectorAll(".cargo-destination [type='radio']"); // Kargonun Gönderilebileceği Bölge

    cargoDestinationRadioButtons.forEach(check => {

        const random_boolean = Math.random() >= 0.5;

        if (random_boolean) {
            check.click();
        }
    });


    const addClassifiedCargoCheckboxes = document.querySelectorAll("[name='addClassifiedCargo'] [type='checkbox']"); // Gönderi Yapabileceğiniz Kargo Şirketleri

    addClassifiedCargoCheckboxes.forEach(check => {

        const random_boolean = Math.random() >= 0.5;

        if (random_boolean) {
            check.click();
        }
    });


    const addCargoRefundCourier = document.querySelectorAll("[name='addCargoRefundCourier'] [type='checkbox']"); // İade Durumunda Tercih Ettiğiniz Kargo Şirketleri

    addCargoRefundCourier.forEach(check => {

        const random_boolean = Math.random() >= 0.5;

        if (random_boolean) {
            check.click();
        }
    });


    const cargoDeliveryDurationSelect = document.getElementsByName("cargoDeliveryDuration")[0]; // Kargoya Veriliş Süresi
    const cargoDeliveryDurationSelectItems = cargoDeliveryDurationSelect.options.length;
    cargoDeliveryDurationSelect.selectedIndex = Math.floor(Math.random() * (cargoDeliveryDurationSelectItems - 1)) + 1;
    cargoDeliveryDurationSelect.dispatchEvent(changeEvent);


    const cargoNoteForTextArea = document.querySelector(".cargo-note-for textarea"); // Alıcılar için Kargo Notunuz (isteğe bağlı)
    cargoNoteForTextArea.value = randomGenerate(150);
    cargoNoteForTextArea.dispatchEvent(changeEvent);


    var salesContractCheckbox = document.getElementsByName("salesContract")[0]; // Satış Kontratı
    salesContractCheckbox.click();

    if (salesContractCheckbox.checked === false) {
        salesContractCheckbox.click();
        salesContractCheckbox.dispatchEvent(changeEvent);
    }


    const thirdpartyMarketplaceAgreementCheckbox = document.getElementsByName("thirdpartyMarketplaceAgreement")[0]; // Üçüncü Taraf Pazar Yeri Sözleşmesi
    thirdpartyMarketplaceAgreementCheckbox.click();

    if (thirdpartyMarketplaceAgreementCheckbox.checked === false) {
        thirdpartyMarketplaceAgreementCheckbox.click();
        thirdpartyMarketplaceAgreementCheckbox.dispatchEvent(changeEvent);
    }


    const postRulesCheckCheckbox = document.getElementsByName("postRulesCheck")[0]; // İlan verme kurallarınıokudum, kabul ediyorum

    if (postRulesCheckCheckbox.checked === false) {
        postRulesCheckCheckbox.click();
        postRulesCheckCheckbox.dispatchEvent(changeEvent);
    }
}