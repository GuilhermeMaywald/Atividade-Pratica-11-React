

export const initialStateProdutos = [];

function productReducer(state, action) {
    switch (action.type) {
        case 'ADICIONAR':
            return [...state, action.payload]
        case 'REMOVER':
            const newArray = state.slice(0, state.length -1)
            return newArray;
    
        default:
            return state;
    }
}

export default productReducer;