import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import img1 from '../assets/images/slider/1.svg'
import img2 from '../assets/images/slider/2.svg'
import img3 from '../assets/images/slider/3.svg'
import next from '../assets/images/slider/right.svg'
import prev from '../assets/images/slider/left.svg'

import { useMediaQuery } from 'react-responsive'
import React, { useEffect, useState } from 'react'

export function Slider() {
    const isPhone = useMediaQuery({ query: '(max-width: 768px)' })
    const [nextimg, setNext] = useState<any>()
    const [previmg, setPrev] = useState<any>()
    useEffect(() => {
        console.log(isPhone)
        if (!isPhone) {
            setNext(<img onClick={()=>{
                //@ts-ignore
                const swiper = document.querySelector('.swiper').swiper;
                swiper.slidePrev();
            }} src={prev} className="swiper-button-next-svg" />)
            setPrev(<img onClick={()=>{
                console.log('test')
                //@ts-ignore
                const swiper = document.querySelector('.swiper').swiper;
                swiper.slideNext();
            }} src={next} className="swiper-button-prev-svg" />)
        } else {
            setNext(undefined)
            setPrev(undefined)
        }
    }, [isPhone])

    return (
        <React.Fragment>
            <section className="swiper-page">  
                {nextimg}   
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={1}
                    pagination={true}
                    observer={true}
                    observeParents={true}
                    parallax={true}
                    navigation={
                        isPhone
                            ? undefined
                            : {
                                  prevEl: '.swiper-button-next-svg', // Assert non-null
                                  nextEl: '.swiper-button-prev-svg' // Assert non-null
                              }
                    }
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <img src={img1} alt="" />
                            <div className="content">
                                <div className="title">BLOCKCHAIN-POWERED SHOPPING FOR ALL</div>
                                <hr />
                                <div className="text">
                                    Beginning with a strong merchandise foundation, expanding into digital sales and integrating blockchain technology
                                    to redefine the e-commerce landscape.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={img2} alt="" />
                            <div className="content">
                                <div className="title">BLOCKCHAIN FORWARD: E-COMMERCE INNOVATED</div>
                                <hr />
                                <div className="text">
                                    Through NFT receipts, multiple accepted cryptocurrencies, and with fully integrated native token, we're innovating
                                    today's shopping experience, transforming how we shop.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={img3} alt="" />
                            <div className="content">
                                <div className="title">SHPC AIRDROP: START EARNING!</div>
                                <hr />
                                <div className="text">
                                    Earn big with our SHPC token airdrop! Collect XP through various activities in the platform and convert them into
                                    SHPC tokens. Start earning today!
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
                {previmg}
            </section>
        </React.Fragment>
    )
}
