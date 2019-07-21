async function postRulesCheck() {
    const changeEvent = new Event('change', {
        bubbles: true
    });

    const postRulesCheck = document.getElementsByName("postRulesCheck")[0];

    if (postRulesCheck.checked === false) {
        postRulesCheck.click();
        postRulesCheck.dispatchEvent(changeEvent);
    }
}