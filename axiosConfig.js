// axiosConfig.js
import axios from "axios";

// Create an axios instance with the specified base URL
const axiosInstance = axios.create({
  baseURL: "https://8899-125-132-224-129.ngrok-free.app", // Update with your actual base URL
  withCredentials: true,
});

// Add a request interceptor to the axios instance
axiosInstance.interceptors.request.use(
  (config) => {
    // Add a custom header to skip ngrok browser warning
    config.headers["ngrok-skip-browser-warning"] = "true"; // This can be removed later

    const url = config.url || "";
    const excludeEndpoints = ["/login", "/auth/login/social/kakao","/user/feedBack/email"];

    // Check if the endpoint is not in the exclude list
    if (!excludeEndpoints.includes(url)) {
      // Get the access token from session storage
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        // Set the Authorization header with the access token
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      // Encode URL parameters
      if (config.params) {
        for (const key in config.params) {
          if (config.params.hasOwnProperty(key) && config.params[key] != null) {
            config.params[key] = encodeURIComponent(config.params[key]);
          }
        }
      }
    }

    return config; // Return the modified config
  },
  (error) => Promise.reject(error) // Handle any errors
);

export default axiosInstance; // Export the axios instance for use in other parts of the application
