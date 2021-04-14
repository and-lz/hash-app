import axios from 'axios'
import APIAnticipation from './APIAnticipation'

jest.mock('axios')

describe('APIAnticipation', () => {
  const URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app'
  const params = {
    amount: 2000,
    installments: 12,
    mdr: 5,
    days: [30, 60, 90],
  }

  const config = { timeout: 10000 }

  const paramsWithWrongTypes = {
    amount: '2000',
    installments: '12',
    mdr: '5',
    days: [30, 60, 90],
  }

  beforeEach(async () => {
    await APIAnticipation(params)
  })
  it('Should call api with correct url and parameters passed', async () => {
    expect(axios.post).toBeCalledWith(URL, params, config)
  })
  it('Should not call api with get method', async () => {
    expect(axios.get).toBeCalledTimes(0)
  })
  it('Should convert params to the expected format', async () => {
    await APIAnticipation(paramsWithWrongTypes)
    expect(axios.post).toHaveBeenLastCalledWith(URL, params, config)
  })
})
