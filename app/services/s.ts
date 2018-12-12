import Service from '@ember/service';

export default class S extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  private a!: string;
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

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    's': S;
  }
}
