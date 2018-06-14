const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // await driver.get('http://www.health.kr/searchDrug/search_detail.asp');
        //
        //
        // const searchBtnBy = By.xpath("//*[@id=\"btn_detail_search\"]");
        // const moreBy = By.id("anchor_proy_more");
        //
        //
        // await driver.findElement(searchBtnBy).click();
        // await driver.findElement(moreBy)


        await driver.get("http://www.health.kr/searchDrug/result_detailmore.asp?input_drug_nm=&search_sunb1=&search_sunb2=&search_sunb3=&search_drugnm_initial=%2C+%2C+%2C+%2C+%2C+%2C+%2C+%2C+%2C+%2C+%2C+%2C+%2C+&drug_nm_mode=field&drug_nm=&sunb_equals1=&sunb_equals2=&sunb_equals3=&sunb_where1=and&sunb_where2=and&input_upsoNm=&search_effect=&cbx_sunbcnt=0&cbx_sunbcnt_mode=0&cbx_bohtype=%2C+%2C+%2C+&cbx_bohtype_mode=0&cbx_class=0%2C+%2C+%2C+&cbx_class_mode=0&search_bohcode=&anchor_dosage_route_hidden=&anchor_form_info_hidden=&mfds_cd=&mfds_cdword=&cbx_narcotic=%2C+%2C+%2C+%2C+&cbx_narcotic_mode=0&kpic_atc_nm=&kpic_atc_nm_opener=&atccode_name=&atccode_val=&atccode_val_opener=&input_hiraingdcd=&cbx_bio=%2C+%2C+%2C+&cbx_bio_mode=0&icode=&fixed_cnt=33414&search_detail=Y&TabState=0&proYN=Y&pageNo=2&rowLength=100&inner_search_word=&inner_search_flag=drug_name&viewmode=&listup=10&more=");

        const tBody = By.xpath("//*[@id=\"tbl_pro\"]/tbody");

        const tb = await driver.findElement(tBody);
        const trArray = await tb.findElements(By.css("tr"));
        trArray.forEach(async row=> {

            let r = await row.getText();

            console.log(r);

        })


        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        await driver.quit();
    }
})();