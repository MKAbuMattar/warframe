const {NEXT_PUBLIC_NODE_ENV} = process.env;

const {NEXT_PUBLIC_HOST} = process.env;

const NODE_ENV = NEXT_PUBLIC_NODE_ENV;
const HOST = NEXT_PUBLIC_HOST;

export default {
  NODE_ENV,
  HOST,
};
