import React from 'react'
import ReactTooltip from 'react-tooltip'
import ReactDOMServer from 'react-dom/server'

import './styles.css'

class HeaderItem extends React.Component {
  render () {
    const { item } = this.props

    const display = item.name === 'about'
      ? <div className="headeritem-container">
        {/* data-tip uses dangerouslySetHTML and does not render JSX */}
        <a data-html={true} data-tip={ReactDOMServer.renderToStaticMarkup(
          item.link.map((nestedItem, i) =>
            <a className="headeritem-text" href={nestedItem.link}>
              <div className={ i !== 0
                ? 'headeritem-dropdown-text headeritem-border'
                : 'headeritem-dropdown-text'}>{nestedItem.text}
              </div>
            </a>
          ))}>{item.text}<img className="headeritem-icon" alt="dcaret" src="/icons/dcaret.svg" /></a>
        <ReactTooltip className='headeritem-dropdown' delayHide={500} effect='solid'/>
      </div>
      : <div className="headeritem-container">
        <a className="headeritem-text" href={item.link}>{item.text}</a>
      </div>

    return display
  }
}

export default HeaderItem
