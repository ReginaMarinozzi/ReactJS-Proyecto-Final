import { createContext, useContext, useEffect, useState } from "react";

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {

    const init = JSON.parse(localStorage.getItem('wishlist')) || []

    const [wishlist, setWishlist] = useState(init)

    const addToWishlist = (item) => {
        setWishlist([...wishlist, item])
    }

    const isInWishlist = (id) => {
        return wishlist.some((item) => item.id === id)
    }


    const removeItemWishList = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])

    return (
        <WishlistContext.Provider value={{
            wishlist,
            addToWishlist,
            isInWishlist,
            removeItemWishList,

        }}>
            {children}
        </WishlistContext.Provider>)

}

export const useWishlistContext = () => {
    return useContext(WishlistContext)
}