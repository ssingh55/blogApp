const initialState = {
    blog: [{
        title: '',
        description: ''
    }]
}

export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BLOG':
            console.log('create blog',action.data);
            return [...state, Object.assign({}, action.data)];


        default:
            return state;
    }
}