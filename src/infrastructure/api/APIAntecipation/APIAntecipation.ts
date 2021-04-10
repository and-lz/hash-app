import axios, { AxiosResponse } from 'axios'

const URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app'

interface APIAntecipationProps {
  amount: number | string
  installments: number | string
  mdr: number | string
  antecipationDays: number[]
}

async function APIAntecipation({
  amount,
  installments,
  mdr,
  antecipationDays,
}: APIAntecipationProps): Promise<AxiosResponse<any>> {
  return await axios.post(
    URL,
    {
      amount: Number(amount),
      installments: Number(installments),
      mdr: Number(mdr),
      days: antecipationDays,
    },
    { timeout: 5000 },
  )
}

export default APIAntecipation
