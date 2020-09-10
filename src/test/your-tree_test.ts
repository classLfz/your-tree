import { YourTree } from '../your-tree.js';
import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('your-tree', () => {
  test('is defined', () => {
    const el = document.createElement('your-tree');
    assert.instanceOf(el, YourTree);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<your-tree></your-tree>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
      </div>
    `
    );
  });

  test('renders with a simple data', async () => {
    const data = [{
      id: '1',
      name: 'item1',
      children: [{
        id: '1-1',
        name: 'item1-1'
      }]
    }]
    const el = await fixture(html`<your-tree .data="${data}"></your-tree>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="container">
        <div class="item">
          ▸
    item1
        </div>
        <div
          class="children"
          hidden="">
          <your-tree-mirror>
          </your-tree-mirror>
        </div>
      </div>
    `
    );
  });
});
