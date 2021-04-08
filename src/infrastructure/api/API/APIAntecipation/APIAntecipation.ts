import axios from "axios";

const URL = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app'

interface APIAntecipationProps {
  amount: number,
  installments: number,
  mdr: number,
  days: number[]
}

async function APIAntecipation({amount, installments, mdr, days}: APIAntecipationProps) {
  return await axios.post(URL, {
      amount,
      installments,
      mdr,
      days
    }
  )
}

export default APIAntecipation;