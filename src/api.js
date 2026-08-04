import axios from "axios";
// const baseURL = import.meta.env.VITE_BASE_URL;
// const baseURL = "http://192.168.1.34/test/public/api/site";
// export const IMAGE_URL = "http://192.168.1.34/test/public/storage/";

// const baseURL = "http://192.168.1.34/test/public/api/site";
// export const IMAGE_URL = "http://192.168.1.34/test/public/storage/";

const baseURL = "https://azcarpet.culture.az/api/site";
export const IMAGE_URL = "https://azcarpet.culture.az/storage/";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("i18nextLng") || "az";

    config.headers["lang"] = lang;

    config.params = {
      ...config.params,
      type: "site",
    };

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
