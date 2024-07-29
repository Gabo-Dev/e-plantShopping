import React, {createContext, useState} from 'react';

export const cartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [addedToCart, setAddedToCart] = useState([]);

    const add = (plant) => {
        setAddedToCart(() => {
            if (addedToCart.some(item => item.name === plant.name)) {
                return addedToCart; // Item is already in the cart, do nothing
            }
            return [...addedToCart, plant]; // Add the new item to the cart
        });
        console.log(addedToCart);
    };

    const remove = (plant) => {
        setAddedToCart((prevAddedToCart) =>
            prevAddedToCart.filter((item) => item.name !== plant.name)
        );
    };
    return(
        <cartContext.Provider value={{addedToCart,add,remove}}>
            {children}
        </cartContext.Provider>
    );
};
