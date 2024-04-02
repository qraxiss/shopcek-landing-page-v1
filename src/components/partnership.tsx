import handshake from '../assets/images/partnership/handshake.png'

import { useApply, ApplyProvider } from '../assets/context/apply'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import React, { useState, useRef, useEffect } from 'react'

import { useFormik } from 'formik'

export function Partnership() {
    function Component() {
        const { sendInformationGQL } = useApply()

        const formik = useFormik({
            initialValues: {
                partnerName: '',
                name: '',
                telegramHandle: '',
                email: ''
            },
            onSubmit: console.log
        })

        const handleChange = (value: any) => {
            console.log(value)
            formik.handleChange(value)
            console.log(formik.values)
        }

        return (
            <React.Fragment>
                <section className="partnership-page">
                    <div className="partnership" id="partnership">
                        <div className="info">
                            <div className="title">PARTNERSHIP</div>

                            <div className="sub-title">YOUR AMBITION, OUR DIGITAL EXECUTION</div>

                            <hr />

                            <div className="text">
                                Welcome to the Shopcek partner program, where we fuse innovation and opportunity to create unique online storefronts
                                for WEB3 projects and influencers.
                                <br /> <br />
                                Our mission is to transform your online presence into a dynamic e-commerce store, enriched with tools and services
                                tailored to enhance your brand.
                            </div>
                        </div>

                        <div className="apply">
                            <div className="title">Apply The Program</div>

                            <div className="form">
                                <div className="row">
                                    <input
                                        type="text"
                                        placeholder="PARTNER NAME"
                                        id="partnerName"
                                        name="partnerName"
                                        onChange={handleChange}
                                        value={formik.values.partnerName}
                                        onBlur={formik.handleBlur}
                                    />
                                    <input type="text" placeholder="EMAIL" onChange={handleChange} />
                                </div>

                                <div className="row">
                                    <input type="text" placeholder="CONTACT NAME" />
                                    <input type="text" placeholder="TELEGRAM HANDLE" />
                                </div>

                                <button
                                    id="partnershipSubmit"
                                    onClick={() => {
                                        sendInformationGQL.fn({
                                            variables: {
                                                email: '1tusbozuk@gmail.com',
                                                partnerName: '1tusbozuk@gmail.com',
                                                name: '1tusbozuk@gmail.com',
                                                telegramHandle: '1tusbozuk@gmail.com'
                                            }
                                        })
                                    }}
                                    className="submit"
                                >
                                    <div className="text">SUBMIT</div>
                                </button>
                            </div>

                            <div className="info-text">
                                *Once we've reviewed your application, our team will be in touch to discuss the next steps. Thank you for reaching out
                                to us.
                            </div>
                        </div>
                    </div>
                    <img src={handshake} className="handshake" />
                    <Popup className="test" open={true}>
                        <div>GeeksforGeeks</div>
                        <button>Click here</button>
                    </Popup>
                </section>
            </React.Fragment>
        )
    }

    return (
        <ApplyProvider>
            <Component />
        </ApplyProvider>
    )
}
