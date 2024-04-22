const fetchData = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Could not fetch data. Please check URL");
    }
    const data = await response.json();
    // console.log(data);
    const { envType: env } = data.data;
    const { VersionTag: version } = data.data.about;
    // console.log(env, version);
    return { env, version };
    // return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
