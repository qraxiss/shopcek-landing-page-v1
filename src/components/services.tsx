import React from 'react'

import merch from '../assets/images/services/merch.svg'
import refill from '../assets/images/services/refill.svg'
import shop from '../assets/images/services/shop.svg'
import icons from '../assets/images/services/icons.png'

export function Services() {
    return (
        <React.Fragment>
            <section className="services-page">
                <img src={icons} className="icons" />
                <div className="title" id="services">
                    SERVICES
                </div>

                <div className="sub-title">REVOLUTIONIZING DIGITAL COMMERCE</div>

                <hr />

                <div className="text">
                    From fashion-forward crypto merchandise to instant gift card conversions and a visionary decentralized marketplace, Shopcek is
                    redefining how you shop, spend, and engage with the digital economy.
                </div>

                <div className="services">
                    <div className="box">
                        <div className="title">MERCH</div>
                        <div className="sub-title">FASHION MEETS CRYPTO</div>
                        <hr />
                        <div className="text">
                            Discover exclusive fashion, accessories, and printed items inspired by your favorite crypto projects & influencers.
                        </div>
                        <img src={merch} />
                    </div>
                    <div className="box">
                        <div className="title">REFILL & GIFT CARDS</div>
                        <div className="sub-title">EVERYDAY NEEDS</div>
                        <hr />
                        <div className="text">Instantly convert your crypto for shopping with brands like Amazon, Steam, Netflix, and many more.</div>
                        <img src={refill} />
                    </div>
                    <div className="box">
                        <div className="title">DECENTRALIZED MARKETPLACE</div>
                        <div className="sub-title">FUTURE OF SHOPPING</div>
                        <hr />
                        <div className="text">
                            Envision an e-commerce platform where direct, transparent transactions are the standard, powered by blockchain.
                        </div>
                        <img src={shop} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
