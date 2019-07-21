chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

        const data = request.data;

        console.log(data);

        if (data === Category.REAL_ESTATE) {
            await realEstateFormFill();
        } else if (data === Category.POCKET_WATCH) {
            await pocketWatchFormFill(false);
        } else if (data === Category.POCKET_WATCH_GET) {
            await pocketWatchFormFill(true);
        } else if (data === Category.TEACHING_STAFF) {
            await teachingStuffFormFill();
        } else if (data === Category.MOBILE_PHONE_GET) {
            await mobilePhoneFormFill(true)
        } else if (data === Category.MOBILE_PHONE) {
            await mobilePhoneFormFill(false)
        }

        sendResponse({
            data: data,
            success: true
        });
    }
);