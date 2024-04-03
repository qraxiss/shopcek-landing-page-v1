import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

import black from '../../assets/images/about/black.svg'

import { useNavigate } from 'react-router'

import { HashLink } from 'react-router-hash-link'
import { MenuProvider, useMenu } from '../../context/menu'

export function Nav() {
    function Component() {
        const { open, setOpen } = useMenu()

        const navigate = useNavigate()

        return (
            <div className="nav">
                <HashLink
                    onClick={() => {
                        console.log(open, setOpen)
                        if (open) {
                            setOpen(false)
                        }
                    }}
                    smooth
                    to="/#services"
                    className="title"
                >
                    SERVICES
                </HashLink>
                <HashLink smooth to="/#partnership" className="title">
                    PARTNERSHIP
                </HashLink>
                <HashLink smooth to="/#faq" className="title">
                    FAQ
                </HashLink>
                <a target="_blank" href="https://shopcek.gitbook.io/" className="title">
                    DOCS
                    <img src={black} className="out" />
                </a>
                <div
                    onClick={() => {
                        navigate('/launch-app')
                    }}
                    className="launch-app"
                >
                    <div className="title">LAUNCH APP</div>
                </div>
            </div>
        )
    }

    return (
        <MenuProvider>
            <Component></Component>
        </MenuProvider>
    )
}

export function Logo() {
    const navigate = useNavigate()

    return (
        <div
            onClick={() => {
                navigate('/')
            }}
            className="logo"
        >
            <img className="icon" src={icon} />
            <img className="text" src={text} />
        </div>
    )
}

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo></Logo>
                <Nav></Nav>
            </div>
        </header>
    )
}
