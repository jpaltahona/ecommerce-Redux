const addToCard = product => {
    return{
        type: "ADD_TO_CARD",
        product
      };
};
 const removeFromCart = product => {
     return{
        type: "REMOVE_FROM_CART",
        product
      }
 };

export {addToCard, removeFromCart};