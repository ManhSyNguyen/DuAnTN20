import React, { createContext, useState, useEffect } from 'react'
import apiRequest from '../../../../api/productApi'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setProducts(data)
                // console.log(data)
            } catch (error) {
                console.log('Faile to request API', error)
            }
        }
        getProduct()
    }, {})
    const [cart, setCart] = useState([]);
    const addCart = (id) => {
        const check = cart.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            console.log(data);
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    };
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, []);
    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart]);

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    };
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}