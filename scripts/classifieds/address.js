async function selectAddresses(isInApartmentComplex) {
    const changeEvent = new Event('change', {
        bubbles: true
    });

    const citySelect = document.getElementsByName("city")[0]; // İl
    const townSelect = document.getElementsByName("town")[0]; // İlçe
    const quarterSelect = document.getElementsByName("quarter")[0]; // Mahalle

    const citySelectItems = citySelect.options.length;
    citySelect.selectedIndex = Math.floor(Math.random() * (citySelectItems - 1)) + 1;
    citySelect.dispatchEvent(changeEvent);
    await sleep(800);

    const townSelectItems = townSelect.options.length;
    townSelect.selectedIndex = Math.floor(Math.random() * (townSelectItems - 1)) + 1;
    townSelect.dispatchEvent(changeEvent);
    await sleep(800);

    const quarterSelectItems = quarterSelect.options.length;
    quarterSelect.selectedIndex = Math.floor(Math.random() * (quarterSelectItems - 1)) + 1;
    quarterSelect.dispatchEvent(changeEvent);
    await sleep(2000);

    if (isInApartmentComplex) {
        const inApartmentComplexSelect = document.getElementsByName("inApartmentComplex")[0];

        const inApartmentComplexSelectItems = inApartmentComplexSelect.options.length;
        inApartmentComplexSelect.selectedIndex = Math.floor(Math.random() * (inApartmentComplexSelectItems - 1)) + 1;
        inApartmentComplexSelect.dispatchEvent(changeEvent);
        await sleep(3000);
    }
}