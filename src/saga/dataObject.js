import store from '../store'

export default function dataObject(){

    const stateList = store.getState()
    const userList = stateList.users

    var arrayLength = userList.length;
    var currentObject = stateList.users[arrayLength - 1]

    return currentObject.object
}
