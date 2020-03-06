import React from 'react'
import ProductList from '../../components/ProductList/index'

const List = () => {
    return(
        <section className="section">
            <div className="columns">
                <section className="section">
                    <div className="container">
                        <ProductList />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default List
