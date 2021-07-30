import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {

    const [show, setShow] = useState(false)

    useEffect(()=>{

        window.addEventListener('scroll', () =>{
            if (window.scrollY > 100){
                setShow(true)
            }else {
                setShow(false)
            }})

            return () => {
                window.removeEventListener('scroll')
            }

    }, [])



    return (
        <div className={`nav ${show && 'nav__black'} `}>

        <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
        alt='Netflix logo'
        />

        <img
        className='nav__avatar'
        src='https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg'
        alt='User avatar'
        />

        </div>
    )
}

export default Nav
