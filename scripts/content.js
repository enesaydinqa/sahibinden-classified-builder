chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

        const category = request.data;

        console.log(category);

        switch (category) {
            case stepByStepCategory.REAL_ESTATE:
                await stepByStepRealEstateCategorySelect();
                break;
            case stepByStepCategory.POCKET_WATCH:
                await stepByStepPocketWatchCategorySelect();
                break;
            case stepByStepCategory.MOBILE_PHONE:
                await stepByStepMobilePhoneCategorySelect();
                break;
            case stepByStepCategory.VEHICLE:
                await stepByStepVehicleCategorySelect();
                break;
            case stepByStepCategory.TEACHING_STAFF:
                await stepByStepTeachingStuffCategorySelect();
                break;
            case classifiedCategory.REAL_ESTATE:
                await realEstateFormFill();
                break;
            case classifiedCategory.POCKET_WATCH:
                await pocketWatchFormFill(false);
                break;
            case classifiedCategory.POCKET_WATCH_GET:
                await pocketWatchFormFill(true);
                break;
            case classifiedCategory.TEACHING_STAFF:
                await teachingStuffFormFill();
                break;
            case classifiedCategory.MOBILE_PHONE_GET:
                await mobilePhoneFormFill(true);
                break;
            case classifiedCategory.MOBILE_PHONE:
                await mobilePhoneFormFill(false);
                break;
            case classifiedCategory.VEHICLE:
                await vehicleFormFill();
                break;

            default :
                console.log("category not selected !");
        }

        sendResponse({
            data: category,
            success: true
        });
    }
);