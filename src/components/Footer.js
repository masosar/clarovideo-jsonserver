import React from 'react'
import logofooter from  '../imgs/clarofooterlogo.svg'

const Footer = () => {
    return (
        <div className='clarovideo-footer-content'>
            <div className="clarovideo-footer-content-logo">
                <img src={logofooter} alt="clarovideo logo" />
            </div>
            <div>Todos los derechos reservados 2021</div>
        </div>
    )
}

export default Footer

