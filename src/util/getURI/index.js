const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION;
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT;

const getURI = (item) => {
  if (!API_URL || !API_VERSION || !API_FORMAT) {
    console.error('Missing environment variables:', {
      API_URL,
      API_VERSION,
      API_FORMAT,
    });
    return null;
  }

  return API_URL.replace('__URL_VERSION__', API_VERSION)
    .replace('__API_ITEM__', item)
    .replace('__API_FORMAT__', API_FORMAT);
};

export default getURI;
