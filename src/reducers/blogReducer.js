import { UPDATE_BLOG, DELETE_BLOG, SINGLE_BLOG, FETCH_BLOGS, NEW_BLOG } from "../actions/constants";

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
        case "SETSTATE"://FETCH_BLOG
            console.log(action.payload);
            return {
                blog: action.payload
            }
        case UPDATE_BLOG:
            let blog = state.blog[0].slice();
            let index = blog.findIndex(x => x._id === action.payload.id);
            blog[index].description = action.payload.description;
            return { ...state, blog: [blog] }
        case NEW_BLOG:
            console.log('create blog', action.data);
            return {
                blog: [...state.blog, Object.assign({}, action.data)]
            }
        //     else{
        //         ...state,
        //     blog: [...state.blog, Object.assign({},action.data)]
        //     }
        // }
        case DELETE_BLOG:
            const remainblog = state.blog.filter((post) => post._id !== action.data._id)
            return { ...state, blog: [remainblog] }

        case SINGLE_BLOG: {
            return { ...state, posts: [action.payload] }
        }

        default:
            return state;
    }
}
