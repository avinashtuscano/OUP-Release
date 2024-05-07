const fetchData = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Could not fetch data. Please check URL");
    }
    const data = await response.json();
    const { envType: env } = data.data;
    const { VersionTag: version } = data.data.about;
    return { env, version };
  } catch (error) {
    console.log(error);
  }
};

export const ODAPI_fetchData = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Could not fetch data. Please check URL");
    }
  } catch (error) {}
};

export default fetchData;
