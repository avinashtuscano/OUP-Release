import { ODAPI_fetchData } from "./utils/fetchData.js";
import displayAcademicData from "./utils/displayAcademicData.js";

const ODPAI_DEV_SANDBOX =
  "https://od-api-sandbox.dev.oxforddictionaries.com/version";
const ODAPI_DEV = "https://od-api.dev.oxforddictionaries.com/version";
const ODAPI_PROD_SANDBOX =
  "https://od-api-sandbox.oxforddictionaries.com/version";
const ODAPI_PROD = "https://od-api.oxforddictionaries.com/version";

const init = async () => {
  const academicData = await fetchAcademicData();
  console.log(academicData);
  displayAcademicData(academicData);
};

const fetchAcademicData = async () => {
  try {
    const urls = [ODPAI_DEV_SANDBOX, ODAPI_DEV];
    const keys = ["DevSandbox", "Dev"];
    const data = await Promise.all(urls.map((url) => ODAPI_fetchData(url)));
    // console.log(data);
    const finalData = {};
    keys.forEach((key, i) => {
      finalData[key] = data[i];
    });

    return finalData;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", init);
