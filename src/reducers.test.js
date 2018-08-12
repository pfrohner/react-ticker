import reducers from './reducers'

test('reducers', () => {
  let state;
  state = reducers({isFetching:true,lastPrice:'4972.8',data:{mid:'4965.55',bid:'4965.5',ask:'4965.6',last_price:'4972.8',low:'4847.8',high:'5056.0',volume:'60.244599619999995',timestamp:'1534108319.6109457'},labels:['23:09:59','23:10:29','23:10:59','23:11:29','23:11:59'],values:['4972.8','4972.8','4972.8','4972.8','4972.8'],trend:null,difference:0}, {type:'RECEIVE_DATA',data:{mid:'4965.55',bid:'4965.5',ask:'4965.6',last_price:'4972.8',low:'4847.8',high:'5056.0',volume:'60.244599619999995',timestamp:'1534108349.19418'},receivedAt:'23:12:29'});
  expect(state).toEqual({isFetching:false,lastPrice:'4972.8',data:{mid:'4965.55',bid:'4965.5',ask:'4965.6',last_price:'4972.8',low:'4847.8',high:'5056.0',volume:'60.244599619999995',timestamp:'1534108349.19418'},labels:['23:09:59','23:10:29','23:10:59','23:11:29','23:11:59','23:12:29'],values:['4972.8','4972.8','4972.8','4972.8','4972.8','4972.8'],trend:null,difference:0});
})

