import { formatToCurrency } from './currency'

describe('formatToCurrency', () => {
  test('should format number correctly', () => {
    const number = 2000
    const numberFormmated = removeWhitespaceInString(formatToCurrency(number))
    const currencyExpected = removeWhitespaceInString('R$ 2.000,00')
    expect(numberFormmated).toBe(currencyExpected)
  })
})

const removeWhitespaceInString = (value: string): string =>
  value.replace(/\s/g, '')
