import React, { createContext } from "react";
import all_product from '../components/Assets/all_product';
//step1:create context
export const ShopContext = createContext(null);
//step2:wrap all child into provider
const ShopContextProvider = (props) => {
    const contextvalue = {all_product}; //step3:create value
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;