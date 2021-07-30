import type from '../actionType'

const initState = {
    list: []
}

export default (state=initState, action)=>{ 
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case type.MUSIC_LIST:
            newState.list = action.payload
            break;
    
        default:
            break;
    }

    return newState
}