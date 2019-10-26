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
      default:
        return state
    }
  }
  
  export default users













  