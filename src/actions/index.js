let nextUserId = 0

export const addUser = object => ({
  type: 'ADD_USER',
  id: nextUserId++,
  object
})

export const refreshList = text => ({
  type: 'REFRESH_LIST',
  text
})

export const updateList = payload => ({
  type: 'UPDATE_LIST',
  payload
})



