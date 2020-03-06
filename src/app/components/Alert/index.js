import React from 'react'

const Alert = ({ data }) => {
    return (
        <div className="notification is-danger">
            <strong>{ data }</strong>
        </div>
    )
}

export default Alert
