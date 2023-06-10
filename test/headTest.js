// Incorporate Mocha and Chai for test/headTest.js

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns '1' for ['1']", () => {
    assert.strictEqual(head(['1']), '1');
  });

  it("returns 23 for [23, 'hello', 13]", () => {
    assert.strictEqual(head([23, 'hello', 13]), 23);
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  
});