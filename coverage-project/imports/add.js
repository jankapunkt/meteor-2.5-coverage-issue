import { validateNumbers } from './validateNumbers'

export const add = (a, b) => {
  validateNumbers(a, b)
  return a + b
}
