import React from 'react'

import handshake from '../assets/images/partnership/handshake.png'

export function Partnership() {
    return (
        <React.Fragment>
            <section className="partnership-page">
                <div className="partnership" id="partnership">
                    <div className="info">
                        <div className="title">PARTNERSHIP</div>

                        <div className="sub-title">YOUR AMBITION, OUR DIGITAL EXECUTION</div>

                        <hr />

                        <div className="text">
                            Welcome to the Shopcek partner program, where we fuse innovation and opportunity to create unique online storefronts for
                            WEB3 projects and influencers.
                            <br /> <br />
                            Our mission is to transform your online presence into a dynamic e-commerce store, enriched with tools and services
                            tailored to enhance your brand.
                        </div>
                    </div>

                    <div className="apply">
                        <div className="title">Apply The Program</div>

                        <div className="form">
                            <div className="row">
                                <input type="text" placeholder="PARTNER NAME" />
                                <input type="text" placeholder="EMAIL" />
                            </div>

                            <div className="row">
                                <input type="text" placeholder="CONTACT NAME" />
                                <input type="text" placeholder="TELEGRAM HANDLE" />
                            </div>

                            <button className="submit">
                                <div className="text">SUBMIT</div>
                            </button>
                        </div>

                        <div className="info-text">
                            *Once we've reviewed your application, our team will be in touch to discuss the next steps. Thank you for reaching out to
                            us.
                        </div>
                    </div>
                </div>
                <img src={handshake} className='handshake' />
            </section>
        </React.Fragment>
    )
}
