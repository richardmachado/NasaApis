import React from 'react'

export default function NEOKey() {
    return (
        <div style={{backgroundColor:"black"}} className="my-3">
            <p style={{fontSize:'2rem'}}>
                <span className="px-4 mr-2 bg-success" /> = Safe Asteroid
            </p>
            <p style={{fontSize:'2rem'}}>
                <span className="px-4 mr-2 bg-danger" /> = Potentially Dangerous Asteroid
            </p>
        </div>
    )
}
