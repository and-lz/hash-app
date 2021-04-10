export function mapDaysToInitialData(days: number[]) {
  const data: any = {}
  days.forEach((day: number) => (data[day] = 0))
  return data
}

export function getFriendlyDayName(day: number) {
  if (day === 1) return 'Amanhã'
  return `Em ${day} dias`
}
