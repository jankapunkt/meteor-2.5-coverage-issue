import { validateNumbers } from '../imports/validateNumbers'

export const mul = (a, b) => {
  validateNumbers(a, b)
  return a * b
}
