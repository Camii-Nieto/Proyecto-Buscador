import React from 'react'

const Spin = () => {
    return (
        <>
        <div className="text-center">
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </>
    )
}

export default Spin;
