import {GET_POSTS} from "../actions/type";

const initState = {
    posts: []
}

export default (state = initState, {type, payload}) => {
    switch (type) {
        case GET_POSTS :
            return {...state, posts: payload}

        default:
            return state

    }
}