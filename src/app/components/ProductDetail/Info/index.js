import React from 'react'

const Info = ({ data }) => {

    return(
        <div className="card">
            <div className="card-content">
                <p className="title">
                    { data.detail.title }
                </p>
                <p className="subtitle">
                    { data.detail.sub_title }
                </p>
                <div className="content">
                    { data.detail.final_price !== '' ? data.detail.final_price : data.detail.special_price }
                </div>
            </div>
        </div>
    )
}

export default Info
