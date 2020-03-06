import React, { useContext, useEffect } from 'react'
import Card from '../ProductCard'
import { GenericContext } from '../../contexts/index'
import qs from 'qs'

const ProductList = () => {
    const { state, loadProduct } = useContext(GenericContext)

    useEffect(() => {
        loadProduct()
    }, [])

    return(
        <>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline is-centered">
                        {
                            typeof state.list !== 'undefined'
                                ? state.list.map(data => {
                                    return <Card key={data.id} data={data} />;
                                }
                            ) : null
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductList
