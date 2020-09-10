var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import './your-tree';
let YourTreeMirror = class YourTreeMirror extends LitElement {
    constructor() {
        super(...arguments);
        this.data = [];
        this.show = false;
    }
    _toggleShow() {
        this.show = !this.show;
    }
    _dispatchClickEvent(event) {
        const target = event.target;
        const customEvent = new CustomEvent('item-click', {
            detail: {
                id: target.dataset.id
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(customEvent);
    }
    render() {
        return html `
      <div class="container">
        ${this.data.map(item => {
            return html `
            ${item.children && item.children.length > 0 ? html `
              <div class="item" @click="${this._toggleShow}">${this.show ? '▾ ' : '▸ '}${item.name}</div>
              <div class="children" .hidden="${!this.show}">
                <your-tree .data="${item.children}"></your-tree>
              </div>
            ` : html `
              <div class="item" data-id="${item.id}" @click="${this._dispatchClickEvent}">▪︎ ${item.name}</div>
            `}
          `;
        })}
      </div>
    `;
    }
};
YourTreeMirror.styles = css `
    :host {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
    .children {
      padding-left: 24px;
    }
  `;
__decorate([
    property({
        type: Array
    })
], YourTreeMirror.prototype, "data", void 0);
__decorate([
    property({
        type: Boolean
    })
], YourTreeMirror.prototype, "show", void 0);
YourTreeMirror = __decorate([
    customElement('your-tree-mirror')
], YourTreeMirror);
export { YourTreeMirror };
//# sourceMappingURL=your-tree-mirror.js.map