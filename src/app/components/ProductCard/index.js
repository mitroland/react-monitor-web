import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../ImageComp'

const ProductCard = ({data}) => {
    const sameHeight = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
    return(
            <div key={data.id} className="column is-one-third">
                <div className="box" style={sameHeight}>
                    <div className="card-image">
                        <Link to={`/product/${data.slug}`}>
                           <Image data={data} />
                       </Link>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="subtitle is-6 has-text-grey">
                                    {data.sub_title}
                                </p>
                                <p className="title is-5">
                                    <Link to={`/product/${data.slug}`} className="has-text-black">
                                        {data.title}
                                    </Link>
                                </p>
                                <p>
                                    {
                                        data.final_price ? data.final_price : data.special_price 
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default ProductCard
