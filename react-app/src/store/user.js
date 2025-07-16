
// constants
const SET_USER = 'user/SET_USER';
const GET_USER = 'user/GET_USER'
const REMOVE_USER = 'user/REMOVE_USER';

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const getUsers = (user) => ({
    type: GET_USER,
    payload: user,

})

export const GetOneUser = (userId) => async (dispatch) => {
    const getData = await fetch(`/api/users/${userId}`, {

        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId,
        }),
    });
    if (getData.ok) {
        const result = await getData.json()
        dispatch(getUsers(result))
        console.log(result, 'result afer dispatch called in thunk')
    }
    return ['successfully got users']


}


const initialState = {}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...action.payload }
        case REMOVE_USER:
            return { user: null }
        default:
            return state;
    }
}
