import { Fragment, useState } from 'react'

const ResponseTabs = (props) => {
  const [bindIndex, setBindIndex] = useState(props.defaultIndex)
  const changeTab = (newIndex) => {
    if (typeof props.onTabClick === 'function') props.onTabClick(newIndex)
    setBindIndex(newIndex)
  }
  const items = props.children.filter((item) => item.type.name === 'TabItem')

  return (
    <Fragment>
      <div>
        <div className="response-tab-menu">
          {items.map(({ props: { index, label, labelColor } }) => (
            <button
              onClick={() => changeTab(index)}
              className={
                bindIndex === index ? `${labelColor} focus` : `${labelColor}`
              }
            >
              {label}
            </button>
          ))}
        </div>
        <div className="tab-view">
          {items.map(({ props }) => (
            <div
              {...props}
              key={props.index}
              style={{ display: bindIndex === props.index ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default ResponseTabs
