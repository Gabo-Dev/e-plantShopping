import React, {createContext, useState} from 'react';

export const cartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [addedToCart, setAddedToCart] = useState({});

    const add = (plant) =>{
        setAddedToCart(() => ({
            ...addedToCart,
            [plant.name]: true, // Set the product name as key and value as true to indicate it's added to cart
        }));
        console.log(addedToCart)
    };
    const remove = (plant) =>{
        setAddedToCart(() =>(
            addedToCart.filter((item) => item.name !== plant.name)
        ));
    };
    return(
        <cartContext.Provider value={{addedToCart,add,remove}}>
            {children}
        </cartContext.Provider>
    );
};
