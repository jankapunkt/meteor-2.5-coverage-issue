import { validateNumbers } from '../imports/validateNumbers'

export const sub = (a, b) => {
  validateNumbers(a, b)
  return a - b
}
