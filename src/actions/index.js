let nextUserId = 0

export const addUser = object => ({
  type: 'ADD_USER',
  id: nextUserId++,
  object
})


