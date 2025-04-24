import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const strapiClient = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  },
});

export const fetchAPI = async (path: string, urlParamsObject = {}, options = {}) => {
  try {
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${path}${queryString ? `?${queryString}` : ''}`;

    const response = await strapiClient.get(requestUrl, mergedOptions);
    return response.data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
};

export const postAPI = async (path: string, data = {}, options = {}) => {
  try {
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    const response = await strapiClient.post(path, data, mergedOptions);
    return response.data;
  } catch (error) {
    console.error('Error posting to Strapi:', error);
    throw error;
  }
};

export const putAPI = async (path: string, data = {}, options = {}) => {
  try {
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    const response = await strapiClient.put(path, data, mergedOptions);
    return response.data;
  } catch (error) {
    console.error('Error putting to Strapi:', error);
    throw error;
  }
};

export const deleteAPI = async (path: string, options = {}) => {
  try {
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    const response = await strapiClient.delete(path, mergedOptions);
    return response.data;
  } catch (error) {
    console.error('Error deleting from Strapi:', error);
    throw error;
  }
};

export default strapiClient; 