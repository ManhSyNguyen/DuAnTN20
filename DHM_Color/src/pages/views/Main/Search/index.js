import React from 'react'
import PropTypes from 'prop-types'

const Search = props => {
    const { ten_sp } = useParams();
    console.log(ten_sp)
    const [products, setProduct] = useState('')
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api.getAll();
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct()
    }, []);

    // search

    const [KeyWord, setKeyWord] = useState(ten_sp)
    console.log(KeyWord)

    const [ProductSearch, setProductSearch] = useState()
    if (KeyWord !== ten_sp) {
        setKeyWord(ten_sp)
        setProductSearch(products.filter((p) => p.ten_sp.toUpperCase().indexOf(KeyWord.toUpperCase().toLowerCase().toLowerCase()) > -1))
    }

    products && !ProductSearch && setProductSearch(products.filter((p) => p.ten_sp.toUpperCase().toLowerCase().indexOf(KeyWord.toUpperCase().toLowerCase()) > -1))
    return (
        <div>

        </div>
    )
}

Search.propTypes = {

}

export default Search
