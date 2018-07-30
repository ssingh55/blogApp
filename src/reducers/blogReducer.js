const initialState = {
    title: '',
    message: ''
}

export default function courseReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_BLOG':
      // state.concat(action.course);
      // return state;
      return [...state,Object.assign({},action.title,action.message)];

    default:
      return state;
  }
}