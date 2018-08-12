import { getDifferenceInPercentage } from './utils'

describe('gets the percentage difference of 2 numbers', () => {
  it('works with positive', () => {
    const diff = getDifferenceInPercentage(10, 20)

    expect(diff).toEqual(100);
  })

  it('works with negative', () => {
    const diff = getDifferenceInPercentage(20, 10)

    expect(diff).toEqual(-50);
  })
})
