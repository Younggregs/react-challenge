const users = (state = [], action) => {
    switch (action.type) {
      case 'ADD_USER':
        return [
          ...state,
          {
            id: action.id,
            object: action.object,

          }
        ]
      case 'REFRESH_LIST':
        return state = undefined
      case 'UPDATE_LIST':
        return state = action.payload
      default:
        return state
    }
  }
  
  export default users