import  { el, list, mount }  from 'https://redom.js.org/redom.es.min.js';
import * as item from './league_items.js';
import * as data from './league_data.js';
import * as calc from './calc.js';

class Hello {
  constructor() {
    this.el = el('h1', '');
  }
  update(data) {
    console.log('update()');
    this.el.textContent = 'Hello ' + data + '!';
  }
  onmount() {
    console.log('mounted Hello');
  }
  onremount() {
    console.log('remounted Hello');
  }
  onunmount() {
    console.log('unmounted Hello');
  }
}

class App {
  constructor() {
    this.el = el('#app',
      this.hello = new Hello()
    );
  }
  update() {
    console.log('App::update()');
  }
  onmount() {
    console.log('mounted App');
  }
  onremount() {
    console.log('remounted App');
  }
  onunmount() {
    console.log('unmounted App');
  }
}

const app = new App();

// // init with some data
// const data = [{
//   id: 1,
//   target: 'RE:DOM'
// }, {
//   id: 2,
//   target: 'world'
// }];

// hellos.update(data);

mount(document.body, app);
app.update();

window.sellItem = item.sellItem;
window.onSpellRankInput = data.onSpellRankInput;
window.addSpellEffect = data.addSpellEffect;