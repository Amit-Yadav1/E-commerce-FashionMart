import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'

import CartContextProvider from './Store/CartContext'
import CheckoutContextProvider from './Store/CheckoutContext'
import ProductContextProvider from './Store/ProductContext'
import WishlistContextProvider from './Store/WishlistContext'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <ProductContextProvider>
            <CartContextProvider>
                <WishlistContextProvider>
                    <CheckoutContextProvider>
                        <App />
                    </CheckoutContextProvider>
                </WishlistContextProvider>
            </CartContextProvider>
        </ProductContextProvider>
    </>
)