import { fireEvent, render, RenderResult } from '@testing-library/react'
import APIAnticipation from 'infrastructure/api/APIAnticipation/APIAnticipation'
import { removeWhitespaceInString } from 'infrastructure/sanitization/whitespace'
import React from 'react'
import { act } from 'react-dom/test-utils'
import CalculatorPage from './Calculator'

const noConnectionModalTitle = 'Você está sem conexão'
const errorModalTitle = 'Não foi possível completar sua solicitação'
const buttonLabel = 'Consultar'

const amountLabel = 'Informe o valor da renda *'
const installmentsLabel = 'Em quantas parcelas *'
const mdrLabel = 'Informe o percentual de MDR *'

jest.mock('infrastructure/api/APIAnticipation/APIAnticipation')
const mockedAPIAnticipation = APIAnticipation as jest.MockedFunction<
  typeof APIAnticipation
>

describe('<CalculatorPage />', () => {
  let component: RenderResult
  let amountField: any
  let installmentstField: any
  let mdrField: any
  let submitButton: any
  let getByText: any
  let queryByText: any
  let getByLabelText: any
  let fillCalculatorFieldsWithValidValues: { (): void; (): void }

  beforeEach(() => {
    jest.restoreAllMocks()

    component = render(<CalculatorPage anticipationDays={[1, 15, 30, 90]} />)
    getByText = component.getByText
    queryByText = component.queryByText
    getByLabelText = component.getByLabelText
    submitButton = getByText(buttonLabel)

    amountField = getByLabelText(amountLabel)
    installmentstField = getByLabelText(installmentsLabel)
    mdrField = getByLabelText(mdrLabel)

    fillCalculatorFieldsWithValidValues = () => {
      act(() => {
        fireEvent.change(amountField, { target: { value: '300000' } })
        fireEvent.change(installmentstField, { target: { value: '12' } })
        fireEvent.change(mdrField, { target: { value: '2' } })
      })
    }
  })
  describe('Renderization', () => {
    test('Should render page with title', () => {
      getByText('Simule sua anticipação')
    })
    test('Should match snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('Behavior', () => {
    test('Should allow the fields to be filled', () => {
      fillCalculatorFieldsWithValidValues()
      expect(removeWhitespaceInString(amountField.value)).toBe('R$3.000,00')
      expect(installmentstField.value).toBe('12')
      expect(mdrField.value).toBe('2')
    })
    test('Should present the error modal, after a failing request to the api', async () => {
      fillCalculatorFieldsWithValidValues()

      mockedAPIAnticipation.mockRejectedValue('')

      await act(async () => {
        fireEvent.click(submitButton)
      })

      getByText(errorModalTitle)
    })
    test('Should present anticipation values, after a successful request to the api', async () => {
      fillCalculatorFieldsWithValidValues()

      mockedAPIAnticipation.mockResolvedValue({
        data: {
          // @ts-ignore
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
      fillCalculatorFieldsWithValidValues()

      jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(false)

      await act(async () => {
        fireEvent.click(submitButton)
      })

      getByText(noConnectionModalTitle)
    })
    test('Should not present no connection modal when the internet is on', async () => {
      fillCalculatorFieldsWithValidValues()

      jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(true)

      await act(async () => {
        fireEvent.click(submitButton)
      })

      expect(queryByText(noConnectionModalTitle)).not.toBeInTheDocument()
    })
  })
})
