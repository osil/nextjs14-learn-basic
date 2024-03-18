import axios from "axios";

const FetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("error");
  }
};

// privte folders

export default FetchData;
