import axios, { AxiosResponse } from 'axios'
import api from '../api'

const URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout'

interface APIAntecipationProps {
  amount: number | string
  installments: number | string
  mdr: number | string
  days: number[]
}

interface APIAntecipationResponse {
  data: {
    [key: number]: number
  }
}

async function APIAntecipation({
  amount,
  installments,
  mdr,
  days,
}: APIAntecipationProps): Promise<AxiosResponse<APIAntecipationResponse>> {
  return await axios.post(
    URL,
    {
      amount: Number(amount),
      installments: Number(installments),
      mdr: Number(mdr),
      days,
    },
    { timeout: api.maxTimeToWaitForApisToAnswerBack },
  )
}

export default APIAntecipation
