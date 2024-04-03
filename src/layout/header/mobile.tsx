//@ts-ignore
import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

import { Nav, Logo } from './web'
import { useNavigate } from 'react-router'

import { MenuProvider, useMenu } from '../../context/menu'

export function Header() {
    function Component() {
        const { setOpen } = useMenu()
        const navigate = useNavigate()

        return (
            <React.Fragment>
                <Menu
                    // open={open}
                    onOpen={() => {
                        setOpen(true)
                    }}
                    onClose={() => {
                        setOpen(false)
                    }}
                >
                    <div className="menu">
                        <Logo />
                        <hr />
                        <Nav />
                    </div>
                </Menu>
                <header className="header">
                    <img
                        onClick={() => {
                            navigate('/')
                        }}
                        className="icon"
                        src={icon}
                    />
                </header>
            </React.Fragment>
        )
    }

    return (
        <MenuProvider>
            <Component></Component>
        </MenuProvider>
    )
}
