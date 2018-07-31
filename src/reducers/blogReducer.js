const initialState = {
    blog: [{
        id: Date.now(),
        title: '123',
        description: 'qwer'
    }]
}

export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BLOG':
            // console.log('create blog',action.data);
            return {
                ...state,
                blog: [...state.blog, Object.assign({}, action.data, {id: Date.now()})]
            }

        default:
            return state;
    }
}
