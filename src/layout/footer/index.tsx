import React from 'react'

import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

function Logo() {
    return (
        <div className="logo">
            <img className="icon" src={icon} />
            <img className="text" src={text} />
        </div>
    )
}

function Nav() {
    return (
        <div className="nav">
            <div className="row">
                <div className="left">
                    <div className="title">SHOPCEK</div>
                    <div className="title">MISC</div>
                </div>
                <div className="right">
                    <div className="title">SUBSCRIBE TO OUR NEWSLETTER</div>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="left">
                    <div className="pages">
                        <div className="page">SERVICES</div>
                        <div className="page">PARTNERSHIP</div>
                        <div className="page">FAQ</div>
                        <div className="page">DOCS</div>
                        <div className="page">LAUNCH APP</div>
                    </div>
                    <div className="pages">
                        <div className="page">BRAND</div>
                        <div className="page">CAREER</div>
                        <div className="page">TERMS OF SERVICES</div>
                        <div className="page">PRIVACY POLICY</div>
                    </div>
                </div>

                <div className="right">
                    <div className="subscribe">
                        <input type="text" placeholder="EMAIL" />
                        <button>
                            <div className="text">SUBSCRIBE</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="top">
                    <Logo />
                    <Nav />
                </div>

                <hr className='mid' />

                <div className="bottom">
                    <div className="text">Copyright 2024 SHOPCEK-All Rights Reserved</div>
                    <div className="text">It was developed to accelerate the transition of the next billion to crypto</div>
                </div>
            </footer>
        </React.Fragment>
    )
}
