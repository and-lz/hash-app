import axios, { AxiosResponse } from 'axios'
import api from '../api'

const URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app'

interface APIAnticipationProps {
  amount: number | string
  installments: number | string
  mdr: number | string
  days: number[]
}

interface APIAnticipationResponse {
  data: {
    [key: number]: number
  }
}

async function APIAnticipation({
  amount,
  installments,
  mdr,
  days,
}: APIAnticipationProps): Promise<AxiosResponse<APIAnticipationResponse>> {
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

export default APIAnticipation
