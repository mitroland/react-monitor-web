import React, { useContext, useEffect } from 'react'
import PDetail from '../../components/ProductDetail/index'

import { GenericContext } from '../../contexts/index'
import { useParams} from "react-router"

const Detail = () => {
    const { state, getProduct } = useContext(GenericContext)
    const { name } = useParams()

    useEffect(() => {
        getProduct(name)
    }, [])

    return(
        <section className="section">
            <div className="columns">
                <section className="section">
                    <div className="container">
                        {
                            typeof state.detail !== 'undefined'
                                ? <PDetail data={state} /> : ''
                        }
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Detail
