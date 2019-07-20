chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {

        const data = request.data;

        console.log(data)
        if (data === "realestate-free") {
            realEstateFormFill();
        } else if (data === "pocket-watch") {
            pocketWatchFormFill();
        }

        sendResponse({
            data: data,
            success: true
        });
    }
);