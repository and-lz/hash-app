import { removeWhitespaceInString } from 'infrastructure/sanitize/whitespace'
import { formatToCurrency } from './currency'

describe('formatToCurrency', () => {
  test('should format 2000 correctly', () => {
    const number = 2000
    const numberFormmated = removeWhitespaceInString(formatToCurrency(number))
    const currencyExpected = removeWhitespaceInString('R$ 2.000,00')
    expect(numberFormmated).toBe(currencyExpected)
  })
  test('should format 10000 correctly', () => {
    const number = 10000
    const numberFormmated = removeWhitespaceInString(formatToCurrency(number))
    const currencyExpected = removeWhitespaceInString('R$ 10.000,00')
    expect(numberFormmated).toBe(currencyExpected)
  })
})
