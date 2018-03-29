import axios from "axios"

<<<<<<< HEAD
export const fetchData = (title) => (
    async (dispatch) => {
        const res = await axios.get("/api/posts/title/" + title);
        dispatch({
            type: "FETCH_DATA_FULFILLED",
            payload: res
        })
    }
)

export const fetchDataSelected = (id)=> (
    async (dispatch) => {
        const res = await axios.get("/api/posts/" + id);
        dispatch({
            type: "FETCH_DATA_FULFILLED",
            payload: res
        })
    }
)


export const fetchAll = () => (
    async (dispatch) => {
        const res = await axios.get("/api/posts");
        dispatch({
            type: "FETCH_DATA_FULFILLED",
            payload: res
        })
    }
)

// import axios from "axios"

// export function fetchData(title){
//     return (dispatch)=>{
//         dispatch({
//         type: "FETCH_DATA",
//         payload: axios.get("/api/posts/title/" + title)
//         })
// }
// }

// export function fetchDataSelected(id){
//     return (dispatch)=>{
//         dispatch({
//         type: "FETCH_DATA",
//         payload: axios.get("/api/posts/" + id)
//         })
// }
// }


// export function fetchAll(){
//     return (dispatch)=>{
//         dispatch({
//         type: "FETCH_DATA",
//         payload: axios.get("/api/posts")
//         })
// }
// }
=======
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
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a

