export const WishlistReducer = (state, action) => {
    var {wishlist}=state
    var product
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            product=action.product
            if(wishlist.find((item)=>item.id===product.id)!==undefined){
                return state
            }
            else{
                return{
                    wishlist:[...wishlist,product]
                }
            }
       
        case "REMOVE_FROM_WISHLIST":
            product=action.product
            wishlist=wishlist.filter((item)=>item.id!==product.id)
            delete product['qty']
            return{
                wishlist:[...wishlist]
            }
        default:
            return state
    }
}