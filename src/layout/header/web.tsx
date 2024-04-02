import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

export function Nav() {

    return (
        <div className="nav">
            <a href='/#services' className="title">SERVICES</a>
            <a href='/#partnership' className="title">PARTNERSHIP</a>
            <a href='/#faq' className="title">FAQ</a>
            <a href='https://shopcek.gitbook.io/' className="title">DOCS</a>
            <div className="launch-app">
                <div className="title">LAUNCH APP</div>
            </div>
        </div>
    )
}

export function Logo() {
    return (
        <div className="logo">
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
