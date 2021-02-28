import {GET_POSTS} from "./type";

export const getPosts = () => async (dispatch) => {
    try {
        const respons = await fetch('https://jsonplaceholder.typicode.com/posts')
        const payload =await respons.json()
        dispatch({
            type: GET_POSTS,
            payload,
        })
    } catch (e) {
        console.error(e)
    }

}
