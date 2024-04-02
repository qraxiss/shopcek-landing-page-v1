//@ts-ignore
import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

import { Nav,Logo } from './web'
import { useNavigate } from 'react-router'

export function Header() {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Menu>
               <div className="menu">
               <Logo />
                <hr />
                <Nav />
               </div>
            </Menu>
            <header className="header">
                <img onClick={()=>{
                    navigate('/')
                }} className='icon' src={icon}/>
            </header>
    

        </React.Fragment>
    )

}
