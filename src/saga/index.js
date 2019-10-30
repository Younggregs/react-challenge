import { eventChannel } from 'redux-saga'
import { put, takeEvery, all, take, call, fork, cancel, flush } from 'redux-saga/effects'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}



function* fetchUser() {
  yield delay(5000)
  //const users = yield API.fetch()
  //console.log('control' + users)
  yield put({ type: '_USER', object: { 'user_id' : 21, 'serial_no' : 1, 'firstname' : 'Nasir Olu Dara','lastname' : 'Olu Dara','birthday' : '1919-09-09','age' : 46, 'hobby' : 'rapper'}})

}

function* dispatchFetchUser() {
  yield takeEvery('ADD_USER', fetchUser)
}








// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    dispatchFetchUser()
  ])
}