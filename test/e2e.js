import { Selector } from 'testcafe'

fixture `App`.page `http://localhost:3000`

test('Title', async t => {
  await t.expect(Selector('title').innerText).eql('BTC/GBP price ticker')
})
