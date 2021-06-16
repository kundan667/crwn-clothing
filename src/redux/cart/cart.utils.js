export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log("called:",cartItems);
    console.log("cartItemToAdd:",cartItemToAdd);
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if( existingCartItem ){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
        
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}