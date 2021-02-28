import {CHANGE_COLOR} from "../actions/type";

const initState  = {
    color: null
}

export default (state = initState, {type, payload}) => {
    switch (type) {
        case CHANGE_COLOR :
           return {...state, color: payload}

        default: return state

    }


}