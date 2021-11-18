const isValid = num => typeof num === 'number' && !isNaN(num)

export const validateNumbers = (...args) => args.forEach(num => {
  if (!isValid(num)) {
    throw new Error(`Invalid: ${num} must be valid numbers and not NaN`)
  }
})
