import { Fragment, useEffect } from 'react'

const CodeHighlight = ({ code, language }) => {
  return (
    <Fragment>
      <pre>
        <code className={`hljs ${language}`}>{code}</code>
      </pre>
    </Fragment>
  )
}

export default CodeHighlight
