async function selectAddresses(objects, isInApartmentComplex) {
    const changeEvent = new Event('change', {
        bubbles: true
    });

    const citySelect = document.getElementsByName(objects.Address.City)[0]; // İl
    const townSelect = document.getElementsByName(objects.Address.Town)[0]; // İlçe
    const quarterSelect = document.getElementsByName(objects.Address.Quarter)[0]; // Mahalle

    citySelect.selectedIndex = 1;
    citySelect.dispatchEvent(changeEvent);
    await sleep(800);

    townSelect.selectedIndex = 3;
    townSelect.dispatchEvent(changeEvent);
    await sleep(800);

    const quarterSelectInterval = setInterval(checkElementNotDisabled, 300);

    function checkElementNotDisabled() {

        console.log("check quarter not disabled");

        if (quarterSelect.getAttribute("disabled") === null) {
            clearInterval(quarterSelectInterval)
        }
        sleep(300);
    }

    quarterSelect.selectedIndex = 9;
    quarterSelect.dispatchEvent(changeEvent);

    if (isInApartmentComplex) {
        ready(objects.Address.InApartmentComplex, function (element) {
            element.selectedIndex = 2;
            element.dispatchEvent(changeEvent);
        });
    }

    ready(objects.Address.MapContainer, function (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    });
}