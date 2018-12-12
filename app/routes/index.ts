import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class Index extends Route.extend({
  s: inject('s')
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  init() {
    super.init();
    console.log(this.get('s').getA());
  }
}
