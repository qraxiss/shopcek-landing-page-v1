import React, { useEffect, useState } from 'react'

import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'
import { useMediaQuery } from 'react-responsive'

import x from '../../assets/images/socials/x.svg'
import tg from '../../assets/images/socials/tg.svg'
import medium from '../../assets/images/socials/medium.svg'
import { useNavigate } from 'react-router'

import gray from '../../assets/images/about/gray.svg'

import { HashLink } from 'react-router-hash-link'

function Logo() {
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

function Nav() {
    const navigate = useNavigate()
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
                        <HashLink smooth to="/#services" className="page">
                            SERVICES
                        </HashLink>
                        <HashLink smooth to="/#partnership" className="page">
                            PARTNERSHIP
                        </HashLink>
                        <HashLink smooth to="/#faq" className="page">
                            FAQ
                        </HashLink>
                        <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/" className="page">
                            DOCS
                            <img src={gray} className="out" />
                        </a>
                        <a
                            onClick={() => {
                                navigate('/launch-app')
                            }}
                            className="page"
                        >
                            LAUNCH APP
                        </a>
                    </div>
                    <div className="pages">
                        <a
                            target="_blank"
                            href="https://drive.google.com/drive/folders/1cVDyVIY6XN5DtJ9WrjnrYfWU50jXrvYD?usp=sharing"
                            className="page"
                        >
                            MEDIA KIT
                            <img src={gray} className="out" />
                        </a>
                        <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/institutional/career" className="page">
                            CAREER
                            <img src={gray} className="out" />
                        </a>
                        <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/terms-and-conditions" className="page">
                            TERMS OF SERVICES
                            <img src={gray} className="out" />
                        </a>
                        <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/privacy-policy" className="page">
                            PRIVACY POLICY
                            <img src={gray} className="out" />
                        </a>
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
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <div className="nav">
                <div className="pages">
                    <div className="title">SHOPCEK</div>
                    <a href="/#services" className="page">
                        SERVICES
                    </a>
                    <a href="/#partnership" className="page">
                        PARTNERSHIP
                    </a>
                    <a href="/#faq" className="page">
                        FAQ
                    </a>
                    <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/" className="page">
                        DOCS
                        <img src={gray} className="out" />
                    </a>
                    <a
                        onClick={() => {
                            navigate('/launch-app')
                        }}
                        className="page"
                    >
                        LAUNCH APP
                    </a>
                </div>

                <div className="pages">
                    <div className="title">MISC</div>
                    <a target="_blank" href="https://drive.google.com/drive/folders/1cVDyVIY6XN5DtJ9WrjnrYfWU50jXrvYD?usp=sharing" className="page">
                        MEDIA KIT
                        <img src={gray} className="out" />
                    </a>
                    <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/institutional/career" className="page">
                        CAREER
                        <img src={gray} className="out" />
                    </a>
                    <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/terms-and-conditions" className="page">
                        TERMS OF SERVICES
                        <img src={gray} className="out" />
                    </a>
                    <a target="_blank" href="https://shopcek.gitbook.io/shopcek-or-shpc-1/legal/privacy-policy" className="page">
                        PRIVACY POLICY
                        <img src={gray} className="out" />
                    </a>
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

function Socials() {
    return (
        <div className="socials">
            <a target="_blank" href="https://t.me/shopcek">
                <img src={tg} className="social" />
            </a>
            <a target="_blank" href="https://x.com/shopcek">
                <img src={x} className="social" />
            </a>
            <a target="_blank" href="https://medium.com/shopcek">
                <img src={medium} className="social" />
            </a>
        </div>
    )
}

export function Footer() {
    const isPhone = useMediaQuery({ query: '(max-width: 768px)' })

    const [nav, setNav] = useState<any>()
    useEffect(() => {
        if (isPhone) {
            setNav(<MobileNav />)
            setBottom(
                <div className="bottom">
                    <div className="text">Developed for the transition of the next billion to crypto</div>
                    <div className="text">Copyright 2024 SHOPCEK-All Rights Reserved</div>
                </div>
            )
        } else {
            setNav(<Nav />)
            setBottom(
                <div className="bottom">
                    <div className="text">Copyright 2024 SHOPCEK-All Rights Reserved</div>
                    <div className="text">Developed for the transition of the next billion to crypto</div>
                </div>
            )
        }
    }, [isPhone])

    const [bottom, setBottom] = useState<any>()

    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="top">
                        <Logo />
                        {nav}
                        {isPhone ? <Socials /> : undefined}
                    </div>
                    {isPhone ? undefined : <Socials />}
                    <hr className="mid" />
                    {bottom}
                </div>
            </footer>
        </React.Fragment>
    )
}
