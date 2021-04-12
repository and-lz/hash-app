export function getOnlyNumbersFromInputValue(ref: { current: any }) {
  if (!ref.current) return
  let onlyNumbers = ref.current.value.replace(/\D+/g, '') / 100
  return onlyNumbers
}
