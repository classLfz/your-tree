import { LitElement, html, customElement, property, css } from 'lit-element'

import './your-tree-mirror'

interface TreeItem {
  id: string|number,
  name: string,
  children: TreeItem[]
}

@customElement('your-tree')
export class YourTree extends LitElement {
  static styles = css`
    :host {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
    .children {
      padding-left: 24px;
    }
  `

  @property({
    type: Array
  })
  data: TreeItem[] = []

  @property({
    type: Boolean
  })
  show = false

  _toggleShow () {
    this.show = !this.show
  }

  _dispatchClickEvent (event: MouseEvent) {
    const target = event.target as HTMLElement
    const customEvent = new CustomEvent('item-click', {
      detail: {
        id: target.dataset.id
      },
      bubbles: true,
      composed: true
    })
    this.dispatchEvent(customEvent)
  }

  render () {
    return html`
      <div class="container">
        ${this.data.map(item => {
          return html`
            ${item.children && item.children.length > 0 ? html`
              <div class="item" @click="${this._toggleShow}">${this.show ? '▾ ' : '▸ '}${item.name}</div>
              <div class="children" .hidden="${!this.show}">
                <your-tree-mirror .data="${item.children}"></your-tree-mirror>
              </div>
            ` : html`
              <div class="item" data-id="${item.id}" @click="${this._dispatchClickEvent}">▪︎ ${item.name}</div>
            `}
          `
        })}
      </div>
    `
  }
}
