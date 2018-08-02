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
            console.log("action: ", action)
            console.log()
            let blog = state.blog.slice();
            // console.log("updt1: ",blog)
            // console.log()
            let index = blog.findIndex(x => x._id === action.data._id);
            // blog[index].title=action.data.title;
            // blog[index].description = action.data.description;
            const objNew = {
                _id: action._id,
                title: action.data.title,
                description: action.data.description
            }
            // console.log("updt2: ",blog)
            // console.log("updt3: ",action.data.title)
            // console.log("updt4: ",action.data.description)
            return {
                ...state, blog: [...state.blog.slice(0, index),
                    objNew,
                ...state.blog.slice(index + 1)
                ]
            }

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
            const remainblog = state.blog.filter((obj) => obj._id !== action._id)
            console.log(remainblog)
            return { ...state, blog: remainblog }

        case SINGLE_BLOG: {
            return { ...state, posts: [action.payload] }
        }

        default:
            return state;
    }
}
