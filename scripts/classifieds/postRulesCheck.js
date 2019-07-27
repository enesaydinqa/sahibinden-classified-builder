async function postRulesCheck(objects) {
    const changeEvent = new Event('change', {
        bubbles: true
    });

    const postRulesCheck = document.getElementsByName(objects.Generic.PostRulesCheck)[0];

    if (postRulesCheck.checked === false) {
        postRulesCheck.click();
        postRulesCheck.dispatchEvent(changeEvent);
    }
}