export const getDifferenceInPercentage = (lastPrice, newPrice) => {
  const diff = parseFloat(((newPrice - lastPrice) / lastPrice * 100).toFixed(2))

  return diff
}
