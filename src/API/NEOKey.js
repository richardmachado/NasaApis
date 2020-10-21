import React from 'react'

export default function NEOKey() {
    return (
        <div style={{backgroundColor:"black"}} className="my-3">
            <p style={{fontSize:'3rem'}}>
                <span className="px-5 mr-2 bg-success" /> = Safe Asteroid
            </p>
            <p style={{fontSize:'3rem'}}>
                <span className="px-5 mr-2 bg-danger" /> = Possibly Dangerous Asteroid
            </p>
        </div>
    )
}
