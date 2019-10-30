import { put, fork, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from '../firebase'


function* startListener() {
 
  const channel = new eventChannel(emiter => {
    const listener = firebase
      .database()
      .ref("entries")
      .on("value", snapshot => {
        emiter({ data: snapshot.val() || {} });
      });

   
    return () => {
      listener.off();
    };
  });


  while (true) {
    const { data } = yield take(channel);
  
    yield put('ADD_USER', data);
  }
}

export default function* rootSaga() {
  yield fork(startListener);
}