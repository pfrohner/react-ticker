export const getDifferenceInPercentage = (newPrice, lastPrice) => {
  const diff = parseFloat(((lastPrice - newPrice) / newPrice * 100).toFixed(2))

  return diff
}
