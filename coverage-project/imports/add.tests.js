/* eslint-env mocha */
import { add } from './add'
import { expect } from 'chai'

describe(add.name, function () {
  it('throws if one num is not a number', function () {
    [
      [undefined, undefined],
      [undefined, 1],
      [1, undefined],
      [null, null],
      [null, 2],
      [2, null],
      ['', ''],
      ['', 1],
      [1, ''],
    ].forEach(([a,b]) => {
      expect(() => add(a, b)).to.throw('must be valid numbers and not NaN')
    })
  })
  it('returns the sum of two numbers', function () {
    expect(add(1, 3)).to.equal(4)
    expect(add(1, -3)).to.equal(-2)
  })
})
