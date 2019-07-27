async function classifiedGETAreaFill(objects) {

    const changeEvent = new Event('change', {
        bubbles: true
    });

    const statusSelect = document.getElementsByName(objects.GET.ItemCondition)[0]; // Durumu
    const statusSelectItems = statusSelect.options.length;
    statusSelect.selectedIndex = Math.floor(Math.random() * (statusSelectItems - 1)) + 1;
    statusSelect.dispatchEvent(changeEvent);


    const stockCount = document.getElementsByName(objects.GET.AddClassifiedQuantity)[0]; // Stok Adedi
    stockCount.value = randomNumberGenerate(3);
    stockCount.dispatchEvent(changeEvent);


    const salesPriceOfProduct = document.getElementsByName(objects.GET.PricingAndInstallment)[0]; // Ürünün Satış Fiyatı
    salesPriceOfProduct.value = randomNumberGenerate(3);
    salesPriceOfProduct.dispatchEvent(changeEvent);


    const countrySelect = document.querySelector(objects.GET.Country); // Ülke
    const citySelect = document.querySelector(objects.GET.City); // Şehir

    const countrySelectItems = countrySelect.options.length;
    countrySelect.selectedIndex = Math.floor(Math.random() * (countrySelectItems - 1)) + 1;
    countrySelect.dispatchEvent(changeEvent);
    await sleep(1000);

    const citySelectItems = citySelect.options.length;
    citySelect.selectedIndex = Math.floor(Math.random() * (citySelectItems - 1)) + 1;
    citySelect.dispatchEvent(changeEvent);


    // CHECKBOXES

    let checkboxes = [
        objects.GET.ShippingPrice,
        objects.GET.CargoDestination,
        objects.GET.AddClassifiedCargo,
        objects.GET.AddCargoRefundCourier
    ];

    checkboxes.forEach(function (selector) {

        const checkbox = document.querySelectorAll(selector);

        checkbox.forEach(checkbox => {
            const random_boolean = Math.random() >= 0.5;

            if (random_boolean) {
                checkbox.click();
            }
        })
    });


    const cargoDeliveryDurationSelect = document.getElementsByName(objects.GET.CargoDeliveryDuration)[0]; // Kargoya Veriliş Süresi
    const cargoDeliveryDurationSelectItems = cargoDeliveryDurationSelect.options.length;
    cargoDeliveryDurationSelect.selectedIndex = Math.floor(Math.random() * (cargoDeliveryDurationSelectItems - 1)) + 1;
    cargoDeliveryDurationSelect.dispatchEvent(changeEvent);


    const cargoNoteForTextArea = document.querySelector(objects.GET.CargoNotFore); // Alıcılar için Kargo Notunuz (isteğe bağlı)
    cargoNoteForTextArea.value = randomGenerate(150);
    cargoNoteForTextArea.dispatchEvent(changeEvent);


    const salesContractCheckbox = document.getElementsByName(objects.GET.SalesContract)[0]; // Satış Kontratı
    salesContractCheckbox.click();

    if (salesContractCheckbox.checked === false) {
        salesContractCheckbox.click();
        salesContractCheckbox.dispatchEvent(changeEvent);
    }


    const thirdPartyMarketplaceAgreementCheckbox = document.getElementsByName(objects.GET.ThirdPartyMarketplaceAgreement)[0]; // Üçüncü Taraf Pazar Yeri Sözleşmesi
    thirdPartyMarketplaceAgreementCheckbox.click();

    if (thirdPartyMarketplaceAgreementCheckbox.checked === false) {
        thirdPartyMarketplaceAgreementCheckbox.click();
        thirdPartyMarketplaceAgreementCheckbox.dispatchEvent(changeEvent);
    }
}