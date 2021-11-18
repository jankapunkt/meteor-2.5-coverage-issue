/* eslint-env mocha */
import { sub } from './sub'
import { expect } from 'chai'

describe(sub.name, function () {
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
      expect(() => sub(a, b)).to.throw('must be valid numbers and not NaN')
    })
  })
  it('returns the diff of two numbers', function () {
    expect(sub(1, 3)).to.equal(-2)
    expect(sub(1, -3)).to.equal(4)
  })
})
