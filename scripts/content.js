chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

        const data = request.data;

        console.log(data);

        switch (data) {
            case Category.REAL_ESTATE:
                await realEstateFormFill();
                break;
            case Category.POCKET_WATCH:
                await pocketWatchFormFill(false);
                break;
            case Category.POCKET_WATCH_GET:
                await pocketWatchFormFill(true);
                break;
            case Category.TEACHING_STAFF:
                await teachingStuffFormFill();
                break;
            case Category.MOBILE_PHONE_GET:
                await mobilePhoneFormFill(true);
                break;
            case Category.MOBILE_PHONE:
                await mobilePhoneFormFill(false);
                break;
            case Category.VEHICLE:
                await vehicleFormFill();
                break;

            default :
                console.log("category not selected !");
        }

        sendResponse({
            data: data,
            success: true
        });
    }
);