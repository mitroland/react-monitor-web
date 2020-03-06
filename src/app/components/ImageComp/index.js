import React from 'react';

const ImageComp = ({data}) => {
    return(
        <img src={data.image_url[0]} alt={data.title} />
    );
};

export default ImageComp;
