import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{},
    clearItem:()=>{}
})

function cartReducer(state,action){
    if (action.type === "ADD_ITEM"){
        const existingItemIndex = state.items.findIndex((item)=>item.id===action.items.id)
        const updatedItems = [...state.items]

        if (existingItemIndex>-1){
            const updatedItem ={
                ...state.items[existingItemIndex],
                quantity:state.items[existingItemIndex].quantity + 1
            }
            updatedItems[existingItemIndex]=updatedItem
        }
        else{
            updatedItems.push({...action.items,quantity:1})

        }
        return {...state,items:updatedItems}
    }
    if(action.type ==='REMOVE_ITEM'){
        const existingItemIndex = state.items.findIndex((item)=>item.id===action.items.id)
        const updatedItems = [...state.items]
        const existItem = state.items[existingItemIndex]
        if(existItem.quantity===1){
            updatedItems.splice(existingItemIndex,1)
        }
        else{
            const updatedItem={
                ...existItem,
                quantity: existItem.quantity -1 
            }
            updatedItems[existingItemIndex] = updatedItem
        }
       return {...state,items:updatedItems}
    }
    if(action.type === 'CLEAR_CART'){
        return {...state,items:[]}
    }
    return state
}

export function CartContextProvider({children}){
    const [cart,dispatchCartAction] = useReducer(cartReducer,{items:[]})
    const CartContext = {
        items:cart.items,
        addItem,
        removeItem,
        clearCart,
    }
    function addItem(item){
        dispatchCartAction({
            type:'ADD_ITEM',
            item:item
        })
    }
    function removeItem(id){
        dispatchCartAction({
            type:'REMOVE_ITEM',
            id:id
        })
    }
    function clearCart(){
        dispatchCartAction({
            type:'CLEAR_CART'
        })
    }
    return <CartContext.Provider value={CartContext}>
            {children}
        </CartContext.Provider>
    
}
export default CartContext;