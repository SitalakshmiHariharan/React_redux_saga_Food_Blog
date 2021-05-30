import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchFoods() {
  const json = yield axios.get('http://localhost:6700/food')
        .then(response => response.data )   
  yield put({ type: "FETCH_FOODS_SUCCESS", payload: json });
}

function* actionWatcher() {
	
     yield takeLatest('FETCH_FOODS_BEGIN', fetchFoods)
}




export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}

