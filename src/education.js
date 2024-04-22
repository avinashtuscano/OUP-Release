import fetchData from "./utils/fetchData.js";
import displayData from "./utils/displayData.js";

const DEV_URL = "https://dev.account.oup.com/api/edu/open/environment";
const TEST_URL = "https://test.account.oup.com/api/edu/open/environment";
const PERF_URL = "https://perf.account.oup.com/api/edu/open/environment";
const UAT_URL = "https://uat.account.oup.com/api/edu/open/environment";
const PPROD_URL = "https://preprod.account.oup.com/api/edu/open/environment";
const PROD_URL = "https://account.oup.com/api/edu/open/environment";

const init = async () => {
  // Fetch data from all environments
  const allData = await fetchAllData();
  displayData(allData);
};

const fetchAllData = async () => {
  let finalData = {};
  try {
    const devData = await fetchData(DEV_URL);
    const testData = await fetchData(TEST_URL);
    const perfData = await fetchData(PERF_URL);
    const uatData = await fetchData(UAT_URL);
    const preProdData = await fetchData(PPROD_URL);
    const prodData = await fetchData(PROD_URL);

    finalData = {
      ...finalData,
      Dev: devData,
      Test: testData,
      Perf: perfData,
      UAT: uatData,
      PreProd: preProdData,
      Prod: prodData,
    };
    return finalData;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", init);
