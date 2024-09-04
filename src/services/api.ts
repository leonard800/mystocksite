import axios from "axios";

const API_URL = "https://api.marketstack.com/v1";
const API_KEY = process.env.NEXT_PUBLIC_MARKETSTACK_API_KEY;

const apiClient = axios.create({
  baseURL: API_URL,
  params: {
    access_key: API_KEY,
  },
});

export const fetchMarketData = async (endpoint: string, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};
