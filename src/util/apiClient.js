import axios from 'axios';

/**
 * Creates a configured axios instance with cancel token support
 * @param {string} url - The API endpoint URL
 * @returns {Object} - Object containing the axios request and cancel function
 */
export const createApiClient = (url) => {
  let cancelTokenSource = axios.CancelToken.source();

  const request = axios({
    method: 'GET',
    url,
    cancelToken: cancelTokenSource.token,
  });

  return {
    request,
    cancel: () => cancelTokenSource.cancel(),
  };
};

/**
 * Checks if an error is a cancellation error
 * @param {Error} error - The error to check
 * @returns {boolean} - True if the error is a cancellation
 */
export const isCancelError = (error) => {
  return axios.isCancel(error);
};
