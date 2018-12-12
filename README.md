# ts-property

```
yarn
ember s
```

open your devtool, should be able to see

```js
  class S extends Ember.Service.extend({// anything which *must* be merged to prototype here
  }) {
    constructor(...args) {
      super(...args);
      this.a = void 0;
    }

    // normal class body definition here
    init() {
      debugger;
      super.init();
      this.a = 'inited';
    }

    getA() {
      return this.a || 'not inited';
    }

  }
```
