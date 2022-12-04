export const initialState ={
    basket:[],
    user:null,
    // basket['apple', 'pinapple'] after doing this we will have number "2" along basket 
    // ამ ჩანაწერით ბასკეტის გასწვრივ დაიწერება ციფრი 2
};

function reducer(state, action){
    console.log(action);
    switch(action.type){
    case 'ADD_TO_BASKET':
        // Logic for adding items to basket
        return{
            ...state,
            basket: [...state.basket, action.item]
        }
    case 'REMOVE_FROM_BASKET':
        // Logic for removing items from basket

        // ამ კოდს ვამატებთ remove from basket  ფუნქციისთვის
        //here  we cloned the basket
        let newBasket = [...state.basket];

        // here we check to see if product exists in basket
        const index = state.basket.findIndex((basketItem)=> basketItem.id ===action.id);
        if (index >=0){
            newBasket.splice(index, 1);
            
            // item exists in basket, remove it
        } else {

        }
        return{...state, basket: newBasket};
    default:
        return state;
}
}

export default reducer;