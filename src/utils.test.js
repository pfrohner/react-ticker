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

  it('works with floats, only displays 2 decimals ', () => {
    const diff = getDifferenceInPercentage(4344.23, 2222.46)

    expect(diff).toEqual(-48.84);
  })
})
