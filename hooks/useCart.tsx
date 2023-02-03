import { ReactNode, useContext, createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Product } from '../types/Product';
import { CartContextType } from './CartContextType';

const CartContext = createContext<CartContextType>({
    cart: [],
});

interface CartProviderProps {
    children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>(() => {
        const storagedCart = localStorage.getItem('@shop:cart')

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    })

    const addToCart = (productId: number) => {
       try {

       } catch {
            toast.error('Erro ao adicionar produto ao carrinho');
       }
    }

    const removeFromCart = (id: number) => {
        const productExists = cart.find(item => item.id === id);

        if (!productExists) {
            return;
        }

        if (productExists.quantity > 1) {
            setCart(cart.map(item => item.id === id ? {
                ...item,
                quantity: item.quantity - 1
            } : item))
        } else {
            setCart(cart.filter(item => item.id !== id))
        }

        localStorage.setItem('@shop:cart', JSON.stringify(cart))
    }

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('@shop:cart');
    }



    return (
        <CartContext.Provider value={{
            cart,
        }}>
        </CartContext.Provider>
    )
}

export default CartProvider

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within an CartProvider');
    }

    return context;
}


// const addToCart = (product: Product) => {
//     const productExists = cart.find(item => item.id === product.id);

//     if (productExists) {
//         setCart(cart.map(item => item.id === product.id ? {
//             ...product,
//             quantity: item.quantity + 1
//         } : item))
//     } else {
//         setCart([...cart, { ...product, quantity: 1 }])
//     }

//     localStorage.setItem('@shop:cart', JSON.stringify(cart))
// }

// const removeFromCart = (id: number) => {
//     const productExists = cart.find(item => item.id === id);

//     if (!productExists) {
//         return;
//     }

//     if (productExists.quantity > 1) {
//         setCart(cart.map(item => item.id === id ? {
//             ...item,
//             quantity: item.quantity - 1
//         } : item))
//     } else {
//         setCart(cart.filter(item => item.id !== id))
//     }

//     localStorage.setItem('@shop:cart', JSON.stringify(cart))
// }

// const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem('@shop:cart');
// }
