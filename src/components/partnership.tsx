import handshake from '../assets/images/partnership/handshake.png'

import { useApply, ApplyProvider } from '../assets/context/apply'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import React, { useState, useRef, useEffect } from 'react'

import { useFormik } from 'formik'

import close from '../assets/images/close.png'
import checked from '../assets/images/checked.png'

export function Partnership() {
    function Component() {
        const { sendInformationGQL } = useApply()

        const formik = useFormik({
            initialValues: {} as any,
            onSubmit: console.log
        })

        const handleChange = (value: any) => {
            formik.handleChange(value)
        }

        const [open, setOpen] = useState(false)

        useEffect(() => {
            if (sendInformationGQL.status) {
                switch (sendInformationGQL.status) {
                    case 'success': {
                        if (sendInformationGQL.data === true) {
                            setOpen(true)
                            formik.setValues({})
                        }
                    }
                }
            }
        }, [sendInformationGQL.status])

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
                                    <input
                                        type="text"
                                        placeholder="EMAIL"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>

                                <div className="row">
                                    <input
                                        type="text"
                                        placeholder="CONTACT NAME"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}
                                    />
                                    <input
                                        type="text"
                                        placeholder="TELEGRAM HANDLE"
                                        id="telegramHandle"
                                        name="telegramHandle"
                                        onChange={handleChange}
                                        value={formik.values.telegramHandle}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>

                                <button
                                    id="partnershipSubmit"
                                    onClick={() => {
                                        sendInformationGQL.fn({
                                            variables: {
                                                ...formik.values
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
                    <Popup className="success-popup" open={true}>
                        <div className="top">
                            <img src={close} alt="" className="close" />
                        </div>

                        <div className="title">Success</div>
                        <p>Your information successfully sended.</p>
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
