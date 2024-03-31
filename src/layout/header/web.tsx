import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

export function Nav(){
    return <div className="nav">
        <div className="title">SERVICES</div >
        <div className="title">PARTNERSHIP</div>
        <div className="title">FAQ</div >
        <div className="title">DOCS</div>
        <div className="launch-app">
            <div className="title">
                LAUNCH APP
            </div>
        </div>
    </div>
}

export function Logo(){
    return <div className="logo">
        <img className='icon' src={icon}/>
        <img className='text' src={text}/>
    </div>
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
