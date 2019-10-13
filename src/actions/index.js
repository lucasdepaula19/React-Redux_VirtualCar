export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_VERSION = 'ADD_VERSION';
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = product => ({
    type: ADD_TO_CART,
    product
});

export function addVersion(version) { 
    return {    
        type: ADD_VERSION,     
        version   
    } 
}

export const removeFromCart = product => ({
    type: REMOVE_FROM_CART,
    product
});