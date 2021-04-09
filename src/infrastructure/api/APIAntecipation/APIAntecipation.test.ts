import axios from 'axios'
import APIAntecipation from './APIAntecipation'

jest.mock('axios')

describe('APIAntecipation', () => {
  const URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app'
  const params = {
    amount: 2000,
    installments: 12,
    mdr: 5,
    days: [30, 60, 90],
  }

  const paramsWithWrongTypes = {
    amount: '2000',
    installments: '12',
    mdr: '5',
    days: [30, 60, 90],
  }

  beforeEach(async () => {
    await APIAntecipation(params)
  })
  it('Should Call Service With Correct URL And Parameters Passed', async () => {
    expect(axios.post).toBeCalledWith(URL, params)
  })
  it('Should not Call Service With Get Method', async () => {
    expect(axios.get).toBeCalledTimes(0)
  })
  it('Should Convert Params To The Expected Format', async () => {
    await APIAntecipation(paramsWithWrongTypes)
    expect(axios.post).toHaveBeenLastCalledWith(URL, params)
  })
})
