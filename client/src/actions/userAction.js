<<<<<<< HEAD
import axios from 'axios';

export const fetchUser = () =>(
    async (dispatch) =>{
        const res = await axios.get('/api/current_user');
        dispatch({
            type: "FETCH_USER",
            payload: res.data
        })
    }
)
=======
export function fetchUser(){
    return{
        type: "FETCH_USER_FULFILLED",
        payload: {
            name:"Julian",
            age: 28
        }
    }
}

export function setUserName(name){
    return{
        type: "SET_USER_NAME",
        payload: name,
    }
}

export function setUserAge(age){
    return{
        type: "SET_USER_AGE",
        payload: age
    }
}
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
