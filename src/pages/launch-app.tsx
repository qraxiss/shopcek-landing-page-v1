import React, { useState, useEffect } from 'react'

import world from '../assets/images/world.png'

import Popup from 'reactjs-popup'

import { useFormik } from 'formik'
import { useApply, ApplyProvider } from '../context/apply'

import close from '../assets/images/close.png'
import checked from '../assets/images/checked.png'

export function LaunchApp() {
    function Component() {
        const { sendInformationGQL } = useApply()

        const formik = useFormik({
            initialValues: {} as any,
            onSubmit: () => {}
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
                            formik.setValues({
                                name: '',
                                telegramHandle: '',
                                email: '',
                                partnerName: ''
                            })
                            setOpen(true)
                        }
                    }
                }
            }
        }, [sendInformationGQL.status])
        return (
            <React.Fragment>
                <section className="launch-app-page">
                    <div className="launch-app-section">
                        <div className="apply">
                            <div className="title">Request a Demo</div>

                            <div className="form">
                                <div className="row">
                                    <input
                                        type="text"
                                        placeholder="YOUR NAME"
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
                                        placeholder="ENTITY NAME"
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
                                *Discover the full potential of our platform, fill out the form for a personalized demonstration.
                            </div>
                        </div>

                        {/* <img src={world} className="world" /> */}
                    </div>

                    <Popup className="success-popup" open={open}>
                        <div className="top">
                            <img
                                onClick={() => {
                                    setOpen(false)
                                }}
                                src={close}
                                alt=""
                                className="close"
                            />
                        </div>

                        <div className="title">Success</div>
                        <p>Your information successfully sended.</p>

                        <img src={checked} alt="" className="checked" />
                    </Popup>
                </section>
            </React.Fragment>
        )
    }

    return (
        <ApplyProvider>
            <Component></Component>
        </ApplyProvider>
    )
}
