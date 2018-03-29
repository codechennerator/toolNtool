export default function reducer(state = {
    fetching: false,
    fetched: false,
    data: [],
    dataSelected: [],
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_DATA": {
            return {
                ...state,
                fetching: true
            }

        }
        case "FETCH_DATA_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }

        }
        case "FETCH_DATA_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }

}