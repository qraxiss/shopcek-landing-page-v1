import React from 'react'
import question from '../assets/images/faq/question.svg'
import plus from '../assets/images/faq/plug.svg'

export function Faq() {
    return (
        <React.Fragment>
            <section className="faq-page">
                <div className="faq">
                    <div className="info">
                        <div className="title">FAQ</div>

                        <div className="sub-title">NEED ASSISTANCE?</div>

                        <hr />

                        <div className="text">
                            Discover questions addressing the most important aspects of Shopcek. Find clear, concise answers to enhance your
                            understanding of our platform
                        </div>

                        <div className="questions">
                            <div className="box">
                                <div className="text">What is Shopcek?</div>
                                <img src={plus} alt="" />
                            </div>
                            <div className="box">
                                <div className="text">What are the key features of Shopcek?</div>
                                <img src={plus} alt="" />
                            </div>
                            <div className="box extended">
                                <div className="text">What are the Refill & Marketplace Strategies?</div>
                                <img src={plus} alt="" />
                            </div>
                            <div className="box">
                                <div className="text">What are the details of the Shopcek Airdrop Program?</div>
                                <img src={plus} alt="" />
                            </div>
                            <div className="box">
                                <div className="text">What are the Payment Options?</div>
                                <img src={plus} alt="" />
                            </div>
                        </div>
                    </div>

                    <img className='question' src={question} alt="" />
                </div>
            </section>
        </React.Fragment>
    )
}
