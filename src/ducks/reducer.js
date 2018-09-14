let initialState = {
    username: '',
    // password: '',
    profile_pic: '',
    id: 0, 
}

//action types
const GET_USERNAME = 'GET_USERNAME'
const GET_PROFILE_PIC = 'GET_PROFILE_PIC'
const UPDATE_ID = 'UPDATE_ID'
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PIC = 'UPDATE_PIC'

//action creator
export function getUsername(username){
    console.log(username)
    return{
        type: GET_USERNAME,
        payload: username
    }
}

export function getProfilePic(profile_pic){
    
    return{
        type: GET_PROFILE_PIC,
        payload: profile_pic
    }
}
export function updateUsername(username){
    
    return{
        type: UPDATE_USERNAME,
        payload: username
        }
    }
export function updateId(id){
    
    return{
        type: UPDATE_ID,
        payload: id
        }
    }
export function updatePic(profile_pic){
    
    return{
        type: UPDATE_PIC,
        payload: profile_pic
        }
    }




// reducer
export default function reducer(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        
        case GET_USERNAME: 
        return Object.assign({}, state, )
        
        case GET_PROFILE_PIC:
        return Object.assign({}, state, )

        case UPDATE_ID:
        return Object.assign({}, state, {id: action.payload})

        case UPDATE_USERNAME:
        return Object.assign({}, state, {username: action.payload})
        case UPDATE_PIC:
        return Object.assign({}, state, {profile_pic: action.payload})

        default: 
        return state
    }
}