import React, { useEffect, useState } from 'react'

import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'
import { useMediaQuery } from 'react-responsive'

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
                        <a href='/#services' className="page">SERVICES</a>
                        <a href='/#partnership' className="page">PARTNERSHIP</a>
                        <a href='/#faq' className="page">FAQ</a>
                        <a href='https://shopcek.gitbook.io/shopcek-or-shpc-1/' className="page">DOCS</a>
                        <a className="page">LAUNCH APP</a>
                    </div>
                    <div className="pages">
                        <a href='https://drive.google.com/drive/folders/1cVDyVIY6XN5DtJ9WrjnrYfWU50jXrvYD?usp=sharing' className="page">BRAND</a>
                        <a href='https://shopcek.gitbook.io/shopcek-or-shpc-1/institutional/career' className="page">CAREER</a>
                        <a href='https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/terms-and-conditions'  className="page">TERMS OF SERVICES</a>
                        <a href='https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/privacy-policy' className="page">PRIVACY POLICY</a>
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

function MobileNav() {
    return (
        <React.Fragment>
            <div className="nav">
                <div className="pages">
                    <div className="title">SHOPCEK</div>
                    <div className="page">SERVICES</div>
                    <div className="page">PARTNERSHIP</div>
                    <div className="page">FAQ</div>
                    <div className="page">DOCS</div>
                    <div className="page">LAUNCH APP</div>
                </div>

                <div className="pages">
                    <div className="title">MISC</div>
                    <div className="page">BRAND</div>
                    <div className="page">CAREER</div>
                    <div className="page">TERMS OF SERVICES</div>
                    <div className="page">PRIVACY POLICY</div>
                </div>

                <div className="newsletter">
                    <div className="title">SUBSCRIBE OUR NEWSLETTER</div>
                    <div className="subscribe">
                        <input type="text" placeholder="EMAIL" />
                        <button>
                            <div className="text">SUBSCRIBE</div>
                        </button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export function Footer() {
    const isPhone = useMediaQuery({ query: '(max-width: 768px)' })

    const [nav, setNav] = useState<any>()
    useEffect(() => {
        if (isPhone) {
            setNav(<MobileNav />)
        } else {
            setNav(<Nav />)
        }
    }, [isPhone])

    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="top">
                        <Logo />
                        {nav}
                    </div>

                    <hr className="mid" />

                    <div className="bottom">
                        <div className="text">Copyright 2024 SHOPCEK-All Rights Reserved</div>
                        <div className="text">It was developed to accelerate the transition of the next billion to crypto</div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
