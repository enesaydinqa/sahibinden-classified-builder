chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {

        const data = request.data;

        if (data === "realestate") {
            realEstateFormFill();
        } else if (data === "pocket-watch") {
            pocketWatchFormFill(false);
        } else if (data === "pocket-watch-get") {
            pocketWatchFormFill(true);
        }

        sendResponse({
            data: data,
            success: true
        });
    }
);