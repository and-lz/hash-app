import { fireEvent, render, RenderResult, screen } from '@testing-library/react'
import APIAntecipation from 'infrastructure/api/APIAntecipation/APIAntecipation'
import { removeWhitespaceInString } from 'infrastructure/sanitize/whitespace'
import React from 'react'
import { act } from 'react-dom/test-utils'
import CalculatorPage from './Calculator'

jest.mock('infrastructure/api/APIAntecipation/APIAntecipation')
const mockedAPIAntecipation = APIAntecipation as jest.MockedFunction<
  typeof APIAntecipation
>

describe('<HomePage>', () => {
  let component: RenderResult
  let amountField: Node | Window
  let installmentstField: Node | Window
  let mdrField: Node | Window
  let submitButton: Node | Window
  let fillCalculator: { (): void; (): void }

  beforeEach(() => {
    component = render(<CalculatorPage antecipationDays={[1, 15, 30, 90]} />)
    submitButton = component.getByText('Consultar')

    fillCalculator = () => {
      amountField = component.getAllByTestId('input-field')[0]
      installmentstField = component.getAllByTestId('input-field')[1]
      mdrField = component.getAllByTestId('input-field')[2]
      act(() => {
        fireEvent.change(amountField, { target: { value: '300000' } })
        fireEvent.change(installmentstField, { target: { value: '12' } })
        fireEvent.change(mdrField, { target: { value: '2' } })
      })
    }
  })
  test('Should render page without erros', () => {
    const label = screen.getByText(/Simule sua antecipação/i)
    expect(label).toBeInTheDocument()
  })
  test('Should match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  describe('Behavior', () => {
    test('Should allow the fields to be filled', () => {
      fillCalculator()
      expect(removeWhitespaceInString(amountField.value)).toBe('R$3.000,00')
      expect(installmentstField.value).toBe('12')
      expect(mdrField.value).toBe('2')
    })
    test('Should present the error modal, after a failing request to the api', async () => {
      fillCalculator()

      mockedAPIAntecipation.mockRejectedValue('')

      await act(async () => {
        fireEvent.click(submitButton)
      })

      const errorTitle = screen.queryByText(
        /Não foi possível completar sua solicitação/i,
      )

      expect(errorTitle).toBeInTheDocument()
    })
    test('Should present antecipation values, after a successful request to the api', async () => {
      fillCalculator()

      // @ts-ignore
      mockedAPIAntecipation.mockResolvedValue({
        data: {
          1: 2000,
          15: 4000,
          30: 6000,
          90: 8000,
        },
      })

      await act(async () => {
        fireEvent.click(submitButton)
      })

      const [day1, day15, day30, day90] = component.queryAllByTestId(
        'result-row',
      )

      expect(day1).toHaveTextContent('Amanhã: R$ 2.000,00')
      expect(day15).toHaveTextContent('Em 15 dias: R$ 4.000,00')
      expect(day30).toHaveTextContent('Em 30 dias: R$ 6.000,00')
      expect(day90).toHaveTextContent('Em 90 dias: R$ 8.000,00')
    })
    test('Should present no connection modal when the internet is off', async () => {
      fillCalculator()

      jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(false)

      await act(async () => {
        fireEvent.click(submitButton)
      })

      const titleNoConnectionModal = screen.getByText(/Você está sem conexão/i)
      expect(titleNoConnectionModal).toBeInTheDocument()
    })
    test('Should not present no connection modal when the internet is on', async () => {
      fillCalculator()

      jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true)

      await act(async () => {
        fireEvent.click(submitButton)
      })

      const titleNoConnectionModal = screen.queryByText(
        /Você está sem conexão/i,
      )
      expect(titleNoConnectionModal).not.toBeInTheDocument()
    })
  })
})
