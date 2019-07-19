chrome.runtime.onMessage.addListener(

    async function (request, sender, sendResponse) {

        var data = request.data;

        if (data === "realestate-free") {
            realEstateFormFill();
        }

        sendResponse({
            data: data,
            success: true
        });
    }
);

async function realEstateFormFill() {

    const changeEvent = new Event('change', {
        bubbles: true
    });

    var classifiedTitleEl = document.getElementsByName("addClassifiedTitle")[0]; // İlan Başlığı
    classifiedTitleEl.click();
    classifiedTitleEl.value = randomGenerate(5).concat(" ").concat(randomGenerate(7).concat(" ").concat(randomGenerate(8)));
    classifiedTitleEl.dispatchEvent(changeEvent);

    var classifiedDescriptionEl = document.querySelector("[name='addClassifiedDetail']  textarea"); // Açıklama
    classifiedDescriptionEl.value = "<p>".concat(randomGenerate(500)).concat("</p>");
    classifiedDescriptionEl.dispatchEvent(changeEvent);

    var classifiedPriceEl = document.getElementsByName("addClassifiedPrice")[0]; // Fiyat
    classifiedPriceEl.click();
    classifiedPriceEl.value = randomNumberGenerate(2).concat(".").concat(randomNumberGenerate(3));
    classifiedPriceEl.dispatchEvent(changeEvent);

    var M2Value = randomNumberGenerate(3);

    var classifiedM2GrossEl = document.getElementsByName("a24")[0]; // m² (Brüt)
    classifiedM2GrossEl.click();
    classifiedM2GrossEl.value = M2Value;
    classifiedM2GrossEl.dispatchEvent(changeEvent);

    var classifiedM2NetEl = document.getElementsByName("a107889")[0]; // m² (Net)
    classifiedM2NetEl.click();
    classifiedM2NetEl.value = M2Value;
    classifiedM2NetEl.dispatchEvent(changeEvent);

    var duesInput = document.getElementsByName("a104239")[0]; // Aidat (TL)
    duesInput.value = randomNumberGenerate(3);
    duesInput.dispatchEvent(changeEvent);

    var random_boolean_furnished = Math.random() >= 0.5;

    if (random_boolean_furnished) {
        var furnishedCheckbox = document.getElementsByName("a103713")[0]; // Eşyalı
        furnishedCheckbox.click();
        furnishedCheckbox.dispatchEvent(changeEvent);
    }

    var random_boolean_availableForLoanCheckbox = Math.random() >= 0.5;

    if (random_boolean_availableForLoanCheckbox) {
        var availableForLoanCheckbox = document.getElementsByName("a1966")[0]; // Krediye Uygun
        availableForLoanCheckbox.click();
        availableForLoanCheckbox.dispatchEvent(changeEvent);
    }

    setClassifiedAddress();

    const postDetailCheckboxes = document.querySelectorAll(".post-detailed-information [type='checkbox']"); // Post Detail Checkboxes

    postDetailCheckboxes.forEach(check => {

        var random_boolean = Math.random() >= 0.5;

        if (random_boolean) {
            check.click();
        }
    });

    const timeExtendRBRadioButton = document.querySelectorAll(".time-extend-offer .offers > li .big-box"); // İlan süresi
    timeExtendRBRadioButton[0].click(); // 30 GÜNLÜK İLAN
    timeExtendRBRadioButton[0].dispatchEvent(changeEvent);

    var roomNumberSelect = document.getElementsByName("a20")[0]; // Oda Sayısı
    const roomNumberSelectItems = roomNumberSelect.options.length;
    var roomNumberSelectItemsIndex = Math.floor(Math.random() * (roomNumberSelectItems - 1)) + 1;
    roomNumberSelect.selectedIndex = roomNumberSelectItemsIndex;
    roomNumberSelect.dispatchEvent(changeEvent);

    var buildingAgeSelect = document.getElementsByName("a812")[0]; // Bina Yaşı
    const buildingAgeSelectItems = buildingAgeSelect.options.length;
    var buildingAgeSelectItemsIndex = Math.floor(Math.random() * (buildingAgeSelectItems - 1)) + 1;
    buildingAgeSelect.selectedIndex = buildingAgeSelectItemsIndex;
    buildingAgeSelect.dispatchEvent(changeEvent);

    var floorLocationSelect = document.getElementsByName("a811")[0]; // Bulunduğu Kat
    const floorLocationSelectItems = floorLocationSelect.options.length;
    var floorLocationSelectItemsIndex = Math.floor(Math.random() * (floorLocationSelectItems - 1)) + 1;
    floorLocationSelect.selectedIndex = floorLocationSelectItemsIndex;
    floorLocationSelect.dispatchEvent(changeEvent);

    var numberOfFloorsSelect = document.getElementsByName("a810")[0]; // Kat Sayısı
    const numberOfFloorsSelectItems = numberOfFloorsSelect.options.length;
    var numberOfFloorsSelectItemsIndex = Math.floor(Math.random() * (numberOfFloorsSelectItems - 1)) + 1;
    numberOfFloorsSelect.selectedIndex = numberOfFloorsSelectItemsIndex;
    numberOfFloorsSelect.dispatchEvent(changeEvent);

    var heatingSelect = document.getElementsByName("a23")[0]; // Isıtma
    const heatingSelectItems = heatingSelect.options.length;
    var heatingSelectItemsIndex = Math.floor(Math.random() * (heatingSelectItems - 1)) + 1;
    heatingSelect.selectedIndex = heatingSelectItemsIndex;
    heatingSelect.dispatchEvent(changeEvent);

    var numberOfBathroomsSelect = document.getElementsByName("a22")[0]; // Banyo Sayısı
    const numberOfBathroomsSelectItems = numberOfBathroomsSelect.options.length;
    var numberOfBathroomsSelectItemsIndex = Math.floor(Math.random() * (numberOfBathroomsSelectItems - 1)) + 1;
    numberOfBathroomsSelect.selectedIndex = numberOfBathroomsSelectItemsIndex;
    numberOfBathroomsSelect.dispatchEvent(changeEvent);

    var balconySelect = document.getElementsByName("a106960")[0]; // Balkon
    const balconySelectItems = balconySelect.options.length;
    var balconySelectItemsIndex = Math.floor(Math.random() * (balconySelectItems - 1)) + 1;
    balconySelect.selectedIndex = balconySelectItemsIndex;
    balconySelect.dispatchEvent(changeEvent);

    var usingStatusSelect = document.getElementsByName("a98426")[0]; // Kullanım Durumu
    const usingStatusSelectItems = usingStatusSelect.options.length;
    var usingStatusSelectItemsIndex = Math.floor(Math.random() * (usingStatusSelectItems - 1)) + 1;
    usingStatusSelect.selectedIndex = usingStatusSelectItemsIndex;
    usingStatusSelect.dispatchEvent(changeEvent);

    var exchangeSelect = document.getElementsByName("exchange")[0]; // Takaslı
    const exchangeSelectItems = exchangeSelect.options.length;
    var exchangeSelectItemsIndex = Math.floor(Math.random() * (exchangeSelectItems - 1)) + 1;
    exchangeSelect.selectedIndex = exchangeSelectItemsIndex;
    exchangeSelect.dispatchEvent(changeEvent);

    var postRulesCheckCheckbox = document.getElementsByName("postRulesCheck")[0]; // İlan verme kurallarınıokudum, kabul ediyorum

    if (postRulesCheckCheckbox.checked == false) {
        postRulesCheckCheckbox.click();
        postRulesCheckCheckbox.dispatchEvent(changeEvent);
    }

}

async function setClassifiedAddress() {
    const changeEvent = new Event('change', {
        bubbles: true
    });

    var citySelect = document.getElementsByName("city")[0]; // İl
    var townSelect = document.getElementsByName("town")[0]; // İlçe
    var quarterSelect = document.getElementsByName("quarter")[0]; // Mahalle

    var citySelectItems = citySelect.options.length;
    var citySelectItemsIndex = Math.floor(Math.random() * (citySelectItems - 1)) + 1;

    citySelect.selectedIndex = citySelectItemsIndex;
    citySelect.dispatchEvent(changeEvent);
    await sleep(800);

    var townSelectItems = townSelect.options.length;
    var townSelectItemsIndex = Math.floor(Math.random() * (townSelectItems - 1)) + 1;

    townSelect.selectedIndex = townSelectItemsIndex;
    townSelect.dispatchEvent(changeEvent);
    await sleep(800);

    var quarterSelectItems = quarterSelect.options.length;
    var quarterSelectItemsIndex = Math.floor(Math.random() * (quarterSelectItems - 1)) + 1;

    quarterSelect.selectedIndex = quarterSelectItemsIndex;
    quarterSelect.dispatchEvent(changeEvent);
    await sleep(800);

    var inApartmentComplexSelect = document.getElementsByName("inApartmentComplex")[0]; // Site İçerisinde

    var inApartmentComplexSelectItems = inApartmentComplexSelect.options.length;
    var inApartmentComplexSelectItemsIndex = Math.floor(Math.random() * (inApartmentComplexSelectItems - 1)) + 1;

    inApartmentComplexSelect.selectedIndex = inApartmentComplexSelectItemsIndex;
    inApartmentComplexSelect.dispatchEvent(changeEvent);
    await sleep(1000);
}

function randomGenerate(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomNumberGenerate(length) {
    var result = '';
    var characters = '123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}