import axios from "axios"

export function fetchData(title){
    return (dispatch)=>{
        dispatch({
        type: "FETCH_DATA",
        payload: axios.get("/api/posts/title/" + title)
        })
}
}

export function fetchDataSelected(id){
    return (dispatch)=>{
        dispatch({
        type: "FETCH_DATA",
        payload: axios.get("/api/posts/" + id)
        })
}
}


export function fetchAll(){
    return (dispatch)=>{
        dispatch({
        type: "FETCH_DATA",
        payload: axios.get("/api/posts")
        })
}
}

