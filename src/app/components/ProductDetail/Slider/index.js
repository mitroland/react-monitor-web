import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = ({ data }) => {
    return (
        <Carousel>
            {
                data.image_url.map((image, i) => {
                    return <div key={i}><img src={ image } alt={ data.title } /></div>
                })
            }
        </Carousel>
    )
}

export default DemoCarousel
