const INITIAL = {
    items: []
}

export default (state = INITIAL,action) =>{
    switch (action.type) {
        case 'Add_item':
            return{
                items: [...state.items,action.payLoad]
            }
        case 'Delete_item':
            return{
                items: action.payLoad
            }
        case 'Edit_item':
            return{
                items: action.payLoad
            }
        case "GET_ITEMS":
            return{
                items: action.payLoad
            }
       default:
            return state;
    }
}