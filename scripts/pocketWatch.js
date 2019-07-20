async function pocketWatchFormFill() {

	console.log("İkinci El ve Sıfır Alışveriş > Saat > Cep Saati");

	const changeEvent = new Event('change', {
		bubbles: true
	});

	var submitEvent = new Event('submit', {
		bubbles: false,
		cancelable: false
	});

	var classifiedTitleEl = document.getElementsByName("addClassifiedTitle")[0]; // İlan Başlığı
	classifiedTitleEl.value = randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8)));
	classifiedTitleEl.dispatchEvent(changeEvent);


	var classifiedDescriptionEl = document.querySelector("[name='addClassifiedDetail']  textarea"); // Açıklama
	classifiedDescriptionEl.value = "<p>".concat(randomGenerate(700)).concat("</p>");
	classifiedDescriptionEl.dispatchEvent(changeEvent);


	var statusSelect = document.getElementsByName("itemCondition")[0]; // Durumu
	const statusSelectItems = statusSelect.options.length;
	var statusSelectItemsIndex = Math.floor(Math.random() * (statusSelectItems - 1)) + 1;
	statusSelect.selectedIndex = statusSelectItemsIndex;
	statusSelect.dispatchEvent(changeEvent);


	var stockCount = document.getElementsByName("addClassifiedQuantity")[0]; // Stok Adedi
	stockCount.value = randomNumberGenerate(3);
	stockCount.dispatchEvent(changeEvent);


	var salesPriceOfProduct = document.getElementsByName("pricingAndInstallment")[0]; // Ürünün Satış Fiyatı
	salesPriceOfProduct.value = randomNumberGenerate(3);
	salesPriceOfProduct.focus();
	salesPriceOfProduct.dispatchEvent(changeEvent);


	const shippingPriceRadioButtons = document.querySelectorAll(".shipping-price [type='radio']"); // Kargo Ücreti

	shippingPriceRadioButtons.forEach(check => {

		var random_boolean = Math.random() >= 0.5;

		if (random_boolean) {
			check.click();
		}
	});


	var countrySelect = document.querySelector(".shipping-from-where > select:nth-child(2)"); // Ülke
	var citySelect = document.querySelector(".shipping-from-where > select:nth-child(4)"); // Şehir

	var countrySelectItems = countrySelect.options.length;
	var countrySelectItemsIndex = Math.floor(Math.random() * (countrySelectItems - 1)) + 1;

	countrySelect.selectedIndex = countrySelectItemsIndex;
	countrySelect.dispatchEvent(changeEvent);
	await sleep(800);

	var citySelectItems = citySelect.options.length;
	var citySelectItemsIndex = Math.floor(Math.random() * (citySelectItems - 1)) + 1;

	citySelect.selectedIndex = citySelectItemsIndex;
	citySelect.dispatchEvent(changeEvent);


	const cargoDestinationRadioButtons = document.querySelectorAll(".cargo-destination [type='radio']"); // Kargonun Gönderilebileceği Bölge

	cargoDestinationRadioButtons.forEach(check => {

		var random_boolean = Math.random() >= 0.5;

		if (random_boolean) {
			check.click();
		}
	});


	const addClassifiedCargoCheckboxes = document.querySelectorAll("[name='addClassifiedCargo'] [type='checkbox']"); // Gönderi Yapabileceğiniz Kargo Şirketleri

	addClassifiedCargoCheckboxes.forEach(check => {

		var random_boolean = Math.random() >= 0.5;

		if (random_boolean) {
			check.click();
		}
	});


	const addCargoRefundCourier = document.querySelectorAll("[name='addCargoRefundCourier'] [type='checkbox']"); // İade Durumunda Tercih Ettiğiniz Kargo Şirketleri  

	addCargoRefundCourier.forEach(check => {

		var random_boolean = Math.random() >= 0.5;

		if (random_boolean) {
			check.click();
		}
	});


	var cargoDeliveryDurationSelect = document.getElementsByName("cargoDeliveryDuration")[0]; // Kargoya Veriliş Süresi
	var cargoDeliveryDurationSelectItems = cargoDeliveryDurationSelect.options.length;
	var cargoDeliveryDurationSelectItemsIndex = Math.floor(Math.random() * (cargoDeliveryDurationSelectItems - 1)) + 1;

	cargoDeliveryDurationSelect.selectedIndex = cargoDeliveryDurationSelectItemsIndex;
	cargoDeliveryDurationSelect.dispatchEvent(changeEvent);


	var cargoNoteForTextArea = document.querySelector(".cargo-note-for textarea"); // Alıcılar için Kargo Notunuz (isteğe bağlı)
	cargoNoteForTextArea.value = randomGenerate(150);
	cargoNoteForTextArea.dispatchEvent(changeEvent);


	var salesContractCheckbox = document.getElementsByName("salesContract")[0]; // Satış Kontratı
	salesContractCheckbox.click();

    if (salesContractCheckbox.checked == false) {
        salesContractCheckbox.click();
        salesContractCheckbox.dispatchEvent(changeEvent);
    }


	var thirdpartyMarketplaceAgreementCheckbox = document.getElementsByName("thirdpartyMarketplaceAgreement")[0]; // Üçüncü Taraf Pazar Yeri Sözleşmesi
	thirdpartyMarketplaceAgreementCheckbox.click();

    if (thirdpartyMarketplaceAgreementCheckbox.checked == false) {
        thirdpartyMarketplaceAgreementCheckbox.click();
        thirdpartyMarketplaceAgreementCheckbox.dispatchEvent(changeEvent);
    }


    var postRulesCheckCheckbox = document.getElementsByName("postRulesCheck")[0]; // İlan verme kurallarınıokudum, kabul ediyorum

    if (postRulesCheckCheckbox.checked == false) {
        postRulesCheckCheckbox.click();
        postRulesCheckCheckbox.dispatchEvent(changeEvent);
    }
}