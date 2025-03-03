import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

// Base URLs from environment variables
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://zetarmold.cherrybox.dev';
const API_PATH = process.env.NEXT_PUBLIC_API_PATH ?? '/api';

// Create a base axios instance with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}${API_PATH}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15 seconds timeout
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('auth_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(
      new Error(error instanceof Error ? error.message : 'Request failed'),
    );
  },
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Handle errors globally
    // For example, handle 401 Unauthorized, refresh tokens, etc.
    return Promise.reject(
      new Error(error instanceof Error ? error.message : 'Response failed'),
    );
  },
);

// Helper functions for API calls
export const api = {
  /**
   * GET request
   * @param url - The URL to make the request to
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  get: async <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.get(url, config);
    return response.data;
  },

  /**
   * POST request
   * @param url - The URL to make the request to
   * @param data - The data to send in the request
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  post: async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.post(
      url,
      data,
      config,
    );
    return response.data;
  },

  /**
   * PUT request
   * @param url - The URL to make the request to
   * @param data - The data to send in the request
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  put: async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.put(
      url,
      data,
      config,
    );
    return response.data;
  },

  /**
   * PATCH request
   * @param url - The URL to make the request to
   * @param data - The data to send in the request
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  patch: async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.patch(
      url,
      data,
      config,
    );
    return response.data;
  },

  /**
   * DELETE request
   * @param url - The URL to make the request to
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  delete: async <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.delete(url, config);
    return response.data;
  },

  // Access to the raw axios instance if needed
  instance: axiosInstance,

  // Base URLs for constructing absolute URLs
  baseUrl: BASE_URL,
  apiPath: API_PATH,
  getFullUrl: (path: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${BASE_URL}/${cleanPath}`;
  },
  getApiUrl: (path: string) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${BASE_URL}${API_PATH}/${cleanPath}`;
  },
};

export default api;
