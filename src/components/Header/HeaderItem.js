import React from 'react'
import ReactTooltip from 'react-tooltip'
import ReactDOMServer from 'react-dom/server'
import { localImageUrl } from '../../utils'

import './styles.css'

class HeaderItem extends React.Component {
  render () {
    const { item } = this.props
    const downCaretImage = localImageUrl('/icons/dcaret.svg')

    return item.name === 'about'
      ? <div className="headeritem-container">
        <ReactTooltip className='headeritem-dropdown' delayHide={500} effect='solid'/>
        {/* data-tip uses dangerouslySetHTML and does not render JSX */}
        <a id="ddp" data-html={true} className="headeritem-text" data-tip={ReactDOMServer.renderToStaticMarkup(
          item.link.map((nestedItem, i) =>
            <a className="headeritem-text" href={nestedItem.link}>
              <div className={`headeritem-dropdown-text ${i !== 0 ? 'headeritem-border' : ''}`}>
                {nestedItem.text}
              </div>
            </a>
          ))}>{item.text}<img className="headeritem-icon" alt="dcaret" src={downCaretImage} /></a>
      </div>
      : <div className="headeritem-container">
        <a className={item.text === '|' ? '' : 'headeritem-text'} href={item.link}>{item.text}</a>
      </div>
  }
}

export default HeaderItem
