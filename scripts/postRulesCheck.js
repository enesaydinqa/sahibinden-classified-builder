async function postRulesCheck() {
    const changeEvent = new Event('change', {
        bubbles: true
    });

    const postRulesCheckCheckbox = document.getElementsByName("postRulesCheck")[0];

    if (postRulesCheckCheckbox.checked === false) {
        postRulesCheckCheckbox.click();
        postRulesCheckCheckbox.dispatchEvent(changeEvent);
    }
}