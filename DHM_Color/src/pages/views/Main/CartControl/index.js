import React, { createContext, useEffect, useState } from 'react'
import apiRequest from '../../../../api/productApi';

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
    const [carts, setCart] = useState([]);
    const addCart = (id) => {
        const check = carts.every(item => {
            return item.id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            console.log(data);
            setCart([...carts, ...data])
        } else {
            alert("The product has been added to cart.")
        }

    };

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, []);

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(carts))
    }, [carts]);


    const value = {
        products: [products, setProducts],
        cart: [carts, setCart],
        addCart: addCart
    };


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
