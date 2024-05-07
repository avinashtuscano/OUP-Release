import { ODAPI_fetchData } from "./utils/fetchData.js";

const ODPAI_DEV_SANDBOX =
  "https://od-api-sandbox.dev.oxforddictionaries.com/version";
const ODAPI_DEV = "https://od-api.dev.oxforddictionaries.com/version";
const ODAPI_PROD_SANDBOX =
  "https://od-api-sandbox.oxforddictionaries.com/version";
const ODAPI_PROD = "https://od-api.oxforddictionaries.com/version";

const init = async () => {
  try {
    const response = await fetch(ODPAI_DEV_SANDBOX);
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("DOMContentLoaded", init);
