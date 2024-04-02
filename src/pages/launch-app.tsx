import React from 'react'

import world from '../assets/images/world.png'

export function LaunchApp() {
    return (
        <React.Fragment>
            <section className="launch-app-page">
                <div className="launch-app-section">
                    <div className="apply">
                        <div className="title">Request a Demo</div>

                        <div className="form">
                            <div className="row">
                                <input type="text" placeholder="YOUR NAME" />
                                <input type="text" placeholder="ENTITY NAME" />
                            </div>

                            <div className="row">
                                <input type="text" placeholder="EMAIL" />
                                <input type="text" placeholder="TELEGRAM HANDLE" />
                            </div>

                            <button className="submit">
                                <div className="text">SUBMIT</div>
                            </button>
                        </div>

                        <div className="info-text">
                        *Discover the full potential of our platform, fill out the form for a personalized demonstration.
                        </div>
                    </div>

                    <img src={world} className="world" />
                </div>
            </section>
        </React.Fragment>
    )
}
