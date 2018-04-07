import axios from "axios"

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

export const storeLoc = (loc) =>(
    async(dispatch) =>{
        dispatch({
            type: "STORE_LOC",
            payload: loc
        })
    }
)
export const isHome = () =>(
    async(dispatch) =>{
        dispatch({
            type: "IS_HOME"
        })
    }
)
export const leftHome = () =>(
    async(dispatch) =>{
        dispatch({
            type: "LEFT_HOME"
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

