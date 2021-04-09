import axios, { AxiosResponse } from 'axios'

const URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout'

interface APIAntecipationProps {
  amount: number | string
  installments: number | string
  mdr: number | string
  days: number[]
}

async function APIAntecipation({
  amount,
  installments,
  mdr,
  days,
}: APIAntecipationProps): Promise<AxiosResponse<any>> {
  return await axios.post(URL, {
    amount,
    installments,
    mdr,
    days,
  })
}

export default APIAntecipation
