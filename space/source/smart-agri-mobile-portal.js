(() => {
    // GLOBAL VARIABLE
    const SMART_AGRI_SPACE_ID = window.location.href.includes('/space/') ? window.location.href.split('/space/')?.[1] : cybozu.data.page.ATTACHED_SPACE.id;
    if (SMART_AGRI_SPACE_ID == 12){
        window.CROP_MASTER_APP_ID = 349; // 作付管理
        window.PLANNING_AND_ATTENDANCE_APP_ID = 285; // 計画・勤怠
        window.ALLOCATION_OF_LABOR_COSTS_APP_ID = 483; // 作付別人件費配賦
        window.HARVEST_MANAGEMENT_APP_ID = 339; // 収穫管理
        window.SORTING_MANAGEMENT_APP_ID = 350; // 選別管理

        window.INVENTORY_MANAGEMENT_APP_ID = 351; // 在庫管理
        window.QUOTATION_MANAGEMENT_APP_ID = 355; // 見積管理
        window.ORDER_MANAGEMENT_APP_ID = 451; // 注文管理
        window.SHIPPING_AND_DELIVERY_APP_ID = 340; // 出荷・納品
        window.SALES_BILLING_AND_COLLECTION_APP_ID = 453; // 売上・請求・回収

        window.USER_MASTER_APP_ID = 342; // 作業者マスター管理
        window.WORK_MASTER_APP_ID = 343; // 作業マスター管理
        window.BREAK_TIME_APP_ID = 317; // 休憩マスター管理
        window.VARIETY_MASTER_MANAGEMENT_APP_ID = 345; // 品種マスター管理
        window.FIELD_MASTER_APP_ID = 346; // 圃場マスター管理
        window.PRODUCT_MASTER_MANAGEMENT_APP_ID = 454; // 商品マスター管理
        window.CUSTOMER_MASTER_MANAGEMENT_APP_ID = 341; // 販売先マスター管理
        window.PLAN_WORK_APP_ID = 538; // 計画・勤怠

        window.USER_EMPLOYEE_GROUP = 12;
        window.USER_ADMIN_GROUP = 13;
    }
    else if (SMART_AGRI_SPACE_ID == 25){
        window.CROP_MASTER_APP_ID = 871;  // 作付管理  
        window.PLANNING_AND_ATTENDANCE_APP_ID = 859;  // 計画・勤怠  
        window.ALLOCATION_OF_LABOR_COSTS_APP_ID = 873;  // 作付別人件費配賦  
        window.HARVEST_MANAGEMENT_APP_ID = 861;  // 収穫管理  
        window.SORTING_MANAGEMENT_APP_ID = 858;  // 選別管理  

        window.INVENTORY_MANAGEMENT_APP_ID = 860;  // 在庫管理  
        window.QUOTATION_MANAGEMENT_APP_ID = 863;  // 見積管理  
        window.ORDER_MANAGEMENT_APP_ID = 856;  // 注文管理  
        window.SHIPPING_AND_DELIVERY_APP_ID = 867;  // 出荷・納品  
        window.SALES_BILLING_AND_COLLECTION_APP_ID = 865;  // 売上・請求・回収  

        window.USER_MASTER_APP_ID = 872;  // 作業者マスター管理  
        window.WORK_MASTER_APP_ID = 868;  // 作業マスター管理  
        window.BREAK_TIME_APP_ID = 874;  // 休憩マスター管理  
        window.VARIETY_MASTER_MANAGEMENT_APP_ID = 870;  // 品種マスター管理  
        window.FIELD_MASTER_APP_ID = 869;  // 圃場マスター管理  
        window.PRODUCT_MASTER_MANAGEMENT_APP_ID = 864;  // 商品マスター管理  
        window.CUSTOMER_MASTER_MANAGEMENT_APP_ID = 862;  // 販売先マスター管理  
        window.PLAN_WORK_APP_ID = 859;  // 計画・勤怠

        window.USER_EMPLOYEE_GROUP = 12;
        window.USER_ADMIN_GROUP = 13;
    }

    // sort list app in space
    const APP_IDS = [
        CROP_MASTER_APP_ID, PLAN_WORK_APP_ID, ALLOCATION_OF_LABOR_COSTS_APP_ID, HARVEST_MANAGEMENT_APP_ID, SORTING_MANAGEMENT_APP_ID, INVENTORY_MANAGEMENT_APP_ID, 
        QUOTATION_MANAGEMENT_APP_ID, ORDER_MANAGEMENT_APP_ID, SHIPPING_AND_DELIVERY_APP_ID, SALES_BILLING_AND_COLLECTION_APP_ID, USER_MASTER_APP_ID, WORK_MASTER_APP_ID, 
        BREAK_TIME_APP_ID, VARIETY_MASTER_MANAGEMENT_APP_ID, FIELD_MASTER_APP_ID, PRODUCT_MASTER_MANAGEMENT_APP_ID, CUSTOMER_MASTER_MANAGEMENT_APP_ID
    ];
    
    if (window.location.href.includes(`/k/m/space/${SMART_AGRI_SPACE_ID}`)){
        $('#main').hide();
    }
    
    kintone.events.on('mobile.space.portal.show', async function (event) {
        try {
            const spaceId = event.spaceId;
            if (spaceId == SMART_AGRI_SPACE_ID) {
                $('.gaia-mobile-v2-ui-tabview-tabbar').hide();
                let arr = $('.gaia-mobile-v2-space-spacebody-text div');
                for (const item of arr){
                    if (!$(item).find("img[src*='employee.png']").length) {
                        $(item).remove();
                    }
                    else {
                        // $(item).remove();
                        break;
                    }
                }
                
            }
        }
        catch (e){

        }
        $('#main').show();
        return event;
    })


})()