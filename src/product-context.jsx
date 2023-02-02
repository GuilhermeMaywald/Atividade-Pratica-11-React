import { Children, useReducer } from "react";
import { createContext } from "react";
import productReducer, { initialStateProdutos } from "./product-reducer";

export const productContext = createContext(initialStateProdutos)

function ProductProvider() {
    const [state, dispatch] = useReducer(productReducer, initialStateProdutos);

    return (
        <productContext.Provider value={{state, dispatch}}>
            {Children}
        </productContext.Provider>
    )
}
export default ProductProvider;