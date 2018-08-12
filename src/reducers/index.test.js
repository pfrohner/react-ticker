import reducers from './index'

test('reducers', () => {
  let state;
  state = reducers({isFetching:true,lastPrice:4940.3,data:{mid:'4947.7',bid:'4947.6',ask:'4947.8',last_price:'4940.3',low:'4765.46775878',high:'5080.13742936',volume:'53.75561397',timestamp:'1534086680.05664'},labels:['17:09:31','17:09:50','17:10:00','17:10:24','17:10:30','17:10:43','17:10:45','17:11:00','17:11:20'],values:[4940.3,4940.3,4940.3,4940.3,4940.3,4940.3,4940.3,4940.3,4940.3],trend:null,difference:null}, {type:'RECEIVE_DATA',data:{mid:'4949.65',bid:'4949.4',ask:'4949.9',last_price:'4940.3',low:'4765.46775878',high:'5080.13742936',volume:'53.75561397',timestamp:'1534086691.0107605'},receivedAt:'17:11:31'});
  expect(state).toEqual({isFetching:false,lastPrice:4940.3,data:{mid:'4949.65',bid:'4949.4',ask:'4949.9',last_price:'4940.3',low:'4765.46775878',high:'5080.13742936',volume:'53.75561397',timestamp:'1534086691.0107605'},labels:['17:09:31','17:09:50','17:10:00','17:10:24','17:10:30','17:10:43','17:10:45','17:11:00','17:11:20','17:11:31'],values:[4940.3,4940.3,4940.3,4940.3,4940.3,4940.3,4940.3,4940.3,4940.3,4940.3],trend:null,difference:null});
});
