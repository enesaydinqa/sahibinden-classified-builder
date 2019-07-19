
async function selectAddress() 
{
    const changeEvent = new Event('change', {
        bubbles: true
    });

    var citySelect = document.getElementsByName("city")[0]; // İl
    var townSelect = document.getElementsByName("town")[0]; // İlçe
    var quarterSelect = document.getElementsByName("quarter")[0]; // Mahalle

    var citySelectItems = citySelect.getElementsByTagName("option");
    var citySelectItemsIndex = Math.floor(Math.random() * (citySelectItems.length - 1)) + 1;

    citySelect.selectedIndex = citySelectItemsIndex;
    citySelect.dispatchEvent(changeEvent);
    await sleep(500);

    var townSelectItems = townSelect.getElementsByTagName("option");
    var townSelectItemsIndex = Math.floor(Math.random() * (townSelectItems.length - 1)) + 1;

    townSelect.selectedIndex = townSelectItemsIndex;
    townSelect.dispatchEvent(changeEvent);
    await sleep(500);

    var quarterSelectItems = quarterSelect.getElementsByTagName("option");
    var quarterSelectItemsIndex = Math.floor(Math.random() * (quarterSelectItems.length - 1)) + 1;

    quarterSelect.selectedIndex = quarterSelectItemsIndex;
    quarterSelect.dispatchEvent(changeEvent);
    await sleep(1000);

    var inApartmentComplexSelect = document.getElementsByName("inApartmentComplex")[0]; // Site İçerisinde

    var inApartmentComplexSelectItems = inApartmentComplexSelect.getElementsByTagName("option");
    var inApartmentComplexSelectItemsIndex = Math.floor(Math.random() * (inApartmentComplexSelectItems.length - 1)) + 1;

    inApartmentComplexSelect.selectedIndex = inApartmentComplexSelectItemsIndex;
    inApartmentComplexSelect.dispatchEvent(changeEvent);
}