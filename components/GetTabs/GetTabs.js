import { Fragment, useState } from 'react'

const GetTabs = (props) => {
  const [bindIndex, setBindIndex] = useState(props.defaultIndex)
  const changeTab = (newIndex) => {
    if (typeof props.onTabClick === 'function') props.onTabClick(newIndex)
    setBindIndex(newIndex)
  }
  const items = props.children.filter((item) => item.type.name === 'TabItem')

  return (
    <Fragment>
      <div>
        <div className="get-tab-menu">
          {items.map(({ props: { index, icon, label } }) => (
            <button
              onClick={() => changeTab(index)}
              className={bindIndex === index ? 'focus' : ''}
            >
              {icon}
              {label}
            </button>
          ))}
        </div>
        <div className="tab-view">
          {items.map(({ props }) => (
            <div
              {...props}
              className="tab-view_item"
              key={props.index}
              style={{ display: bindIndex === props.index ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default GetTabs
