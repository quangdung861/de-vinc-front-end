const getApiUrl = () => {
  const isLocalhost = window.location.hostname === 'localhost';

  return isLocalhost
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL;
};

export default getApiUrl;