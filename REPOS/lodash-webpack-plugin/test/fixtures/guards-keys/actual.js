import { keys } from 'lodash';

class Foo {
  constructor() {
    this.a = 1;
  }
}

Foo.prototype.b = 2;

keys(new Foo);
