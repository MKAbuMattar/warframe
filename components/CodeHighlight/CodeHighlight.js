import { Fragment, useEffect } from 'react'
import hljs from 'highlight.js'

const CodeHighlight = ({ code, language }) => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])

  return (
    <Fragment>
      <pre>
        <code className={`hljs ${language}`}>{code}</code>
      </pre>
    </Fragment>
  )
}

export default CodeHighlight
