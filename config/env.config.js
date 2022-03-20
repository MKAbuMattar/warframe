const { NEXT_PUBLIC_NODE_ENV } = process.env

console.log(NEXT_PUBLIC_NODE_ENV)

const NODE_ENV = NEXT_PUBLIC_NODE_ENV

module.exports = {
  NODE_ENV,
}
