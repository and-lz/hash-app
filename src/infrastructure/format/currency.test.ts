import { formatToCurrency } from './currency'

describe('formatToCurrency', () => {
  test('should format number correctly', () => {
    const number = 2000
    const numberFormmated = removeWhitespace(formatToCurrency(number))
    const currencyExpected = removeWhitespace('R$ 2.000,00')
    expect(numberFormmated).toBe(currencyExpected)
  })
})

const removeWhitespace = (value: string): string => value.replace(/\s/g, '')