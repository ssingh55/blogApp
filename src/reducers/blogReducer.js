
// const initialState = {
//     blog: [{
//         id: Date.now(),
//         title: '123',
//         description: 'qwer'
//     }]
// }

const initialState = {
    data: []
};
export default function blogReducer(state = initialState, action) {
    switch (action.type) {
        case "SETSTATE":
            console.log(action.payload);
            return {
                blog: action.payload
            }
        case "EDIT_BLOG":
            return{
                
            }
        case 'ADD_BLOG':
            // console.log('create blog',action.data);
            return {
                if(){
                ...state,
                blog: [...state.blog, Object.assign({}, action.data, { _id: Date.now() })]
                }
                else{
                    ...state,
                blog: [...state.blog, Object.assign({},action.data)]
                }
            }
        case 'DELETE_BLOG':
            return {
                ...state,
                
            }

        default:
            return state;
    }
}
