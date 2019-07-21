chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

        const data = request.data;

        if (data === Category.REAL_ESTATE) {
            await realEstateFormFill();
        } else if (data === Category.POCKET_WATCH) {
            await pocketWatchFormFill(false);
        } else if (data === Category.POCKET_WATCH_GET) {
            await pocketWatchFormFill(true);
        } else if (data === Category.TEACHING_STAFF) {
            await teachingStuffFormFill();
        }

        sendResponse({
            data: data,
            success: true
        });
    }
);