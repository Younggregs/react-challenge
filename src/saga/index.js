import { put, fork, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from '../firebase';
import addUserData from './addUser';


function* fetchUser(action) {
  try {
     
     const { payload } = action
     const user = yield addUserData(payload)

     console.log('p - ' + user)

  } catch (e) {
     //yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}



function* startListener() {
  const channel = new eventChannel((emiter) => {
    const listener = firebase
      .database()
      .ref('entries')
      .on('value', (snapshot) => {
        emiter({ data: snapshot.val() || {} });
      });


    return () => {
      listener.off();
    };
  });


  while (true) {

   const { data } = yield take(channel); 
   const payload = Object.keys(data).map((el, i) => data[el])
   
  yield put({type: "UPDATE_LIST", payload: payload });
 
    
  }
}




export default function* rootSaga() {
  
  yield takeEvery('ADD_USER', fetchUser)
  yield fork(startListener);
}
