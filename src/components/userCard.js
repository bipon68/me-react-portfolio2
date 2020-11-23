import React from 'react'


const userCard = ({user}) => {
    return (
        <div>
            <div className='card'>
            <div className="card--content">
                <h3 className="card--title">{user.F_Name}</h3>
                </div>
            </div>
        </div>
    )
}

export default userCard