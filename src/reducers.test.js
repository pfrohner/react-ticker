import reducers from './reducers'

test('reducers', () => {
  let state;
  state = reducers({isFetching:true,lastPrice:'5020.2',priceData:{price:'5020.2',trend:'up',difference:0},labels:['09:22:14','09:23:51','09:24:14','09:24:44'],values:['5020.1','5020.1','5020.1','5020.2']}, {type:'REQUEST_COMPLETED'});
  expect(state).toEqual({isFetching:false,lastPrice:'5020.2',priceData:{price:'5020.2',trend:'up',difference:0},labels:['09:22:14','09:23:51','09:24:14','09:24:44'],values:['5020.1','5020.1','5020.1','5020.2']});
});

