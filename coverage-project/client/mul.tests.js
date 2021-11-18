/* eslint-env mocha */
import { mul } from './mul'
import { expect } from 'chai'

describe(mul.name, function () {
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
      expect(() => mul(a, b)).to.throw('must be valid numbers and not NaN')
    })
  })
  it('returns the mul of two numbers', function () {
    expect(mul(1, 3)).to.equal(3)
    expect(mul(1, -3)).to.equal(-3)
  })
})
