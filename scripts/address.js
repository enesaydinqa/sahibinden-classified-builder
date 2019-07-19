
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
    await sleep(2000);

    var inApartmentComplexSelect = document.getElementsByName("inApartmentComplex")[0]; // Site İçerisinde

    var inApartmentComplexSelectItems = inApartmentComplexSelect.options.length;
    var inApartmentComplexSelectItemsIndex = Math.floor(Math.random() * (inApartmentComplexSelectItems - 1)) + 1;

    inApartmentComplexSelect.selectedIndex = inApartmentComplexSelectItemsIndex;
    inApartmentComplexSelect.dispatchEvent(changeEvent);
    await sleep(3000);
}