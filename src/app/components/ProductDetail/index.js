import React from 'react'
import Slider from './Slider/index';
import Info from './Info/index';

const ProductDetail = ({ data }) => {
    return(
        <div className="columns">
            <div className="column is-three-fifths">
                <Slider data={data.detail} />
            </div>
            <div className="column">
                <Info data={data} />
            </div>
        </div>
    )
}

export default ProductDetail
