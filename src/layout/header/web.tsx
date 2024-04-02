import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

import black from '../../assets/images/about/black.svg'

import { useNavigate } from 'react-router'

export function Nav() {
    const navigate = useNavigate()

    return (
        <div className="nav">
            <a href="/#services" className="title">
                SERVICES
            </a>
            <a href="/#partnership" className="title">
                PARTNERSHIP
            </a>
            <a href="/#faq" className="title">
                FAQ
            </a>
            <a target="_blank" href="https://shopcek.gitbook.io/" className="title">
                DOCS
                <img src={black} className='out' />
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
