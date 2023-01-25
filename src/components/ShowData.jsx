import React from 'react'

const ShowData = ({ arrayData }) => {
    return (
        <div className='data-list-container'>
            {
                arrayData.map(e => (
                    <ul className='ul-container' key={e.contraseña}>
                        <li>{e.nombre}</li>
                        <li>{e.apellido}</li>
                        <li>{e.email}</li>
                        <li>{e.contraseña}</li>
                    </ul>
                ))
            }

        </div>
    )
}

export default ShowData
