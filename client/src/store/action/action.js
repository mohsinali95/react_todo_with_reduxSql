import axios from "axios";
export function addItem(obj) {
    return dispatch =>{
        axios.post('/api',obj)
        .then(res => {
            dispatch({
                type: "Add_item",
                payLoad: res.data[0]
            })
        })
    }
}

export function deleteItem(ind) {
    return dispatch => {
        axios.delete('/api/delete/'+ind)
        .then(res => {
            dispatch({
                type: "Delete_item",
                payLoad: res.data
            })
        })
    }
}

export function editItem(id,text) {
    return dispatch => {
        axios.get('/api/edit/'+id+'/'+text).then(res=> {
            dispatch({
                type: "Edit_item",
                payLoad: res.data
            })
        })
    }
}

export function GetItems() {
    return dispatch => {
        axios.get('/api')
        .then(res => {
            dispatch({
                type: "GET_ITEMS",
                payLoad: res.data
            })
        });
    }
}