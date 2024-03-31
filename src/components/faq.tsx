import React, { useState } from 'react'
import question from '../assets/images/faq/question.svg'
import plus from '../assets/images/faq/plug.svg'
import minus from '../assets/images/faq/minus.png'

const data = [
    {
        title: 'What is Shopcek?',
        text: (
            <div className="text">
                <p>
                    Shopcek is a curated e-commerce platform that starts with offering merchandise as a service. This initial focus on web3-centric
                    products is designed to engage a community of early adopters and lay the foundation for brand identity. Following this, Shopcek
                    introduces the Refill service, which encourages the use of cryptocurrencies for everyday purchases such as gift cards and top-ups,
                    making the process familiar and straightforward for users.
                </p>

                <p>
                    The journey from curated merchandise offerings to a functional Refill service is a strategic step towards Shopcek's vision of
                    becoming a comprehensive marketplace. This envisioned marketplace is entirely integrated with blockchain technology, aiming to
                    enhance online shopping experiences through improved transactional transparency, security, and accessibility. Shopcek's strategic
                    approach sets the stage for transforming e-commerce by integrating blockchain technology directly into its operations, aiming to
                    establish a marketplace where digital currencies are a standard payment method.
                </p>
            </div>
        )
    },
    {
        title: 'What are the key features of Shopcek?',
        text: (
            <div className="text">
                Shopcek introduces a range of features designed to enhance the e-commerce experience through blockchain technology:
                <ul>
                    <li>
                        Crypto Payment Discounts: Users benefit from discounts on purchases made with cryptocurrencies, encouraging the use of digital
                        currencies.
                    </li>
                    <li>
                        Focus on UI & UX: High priority is given to user interface and user experience, ensuring a seamless payment and shopping
                        process for all users.
                    </li>
                    <li>
                        Comprehensive Loyalty Program: A gamified airdrop program where users earn XP for activities on the platform. This XP can be
                        converted into SHPC tokens, proportional to the amount earned.
                    </li>
                    <li>
                        Shopcek Domain NFTs: Users can own Shopcek Domain NFTs, granting them lifetime priority in platform rewards and airdrops.
                        These domains also have a multiplier effect on XP rewards, enhancing user engagement.
                    </li>
                    <li>
                        Fully Integrated Native Token - SHPC: The SHPC token is integrated throughout the platform, facilitating transactions,
                        offering discounts, and playing a crucial role in the loyalty program. Additionally, SHPC enables advanced staking options for
                        projects, influencers, as well as customers, enhancing platform engagement and offering valuable benefits to its users.
                    </li>
                    <li>
                        Blockchain-Recorded Sales: Leveraging NFT technology, all sales are recorded on the blockchain, ensuring transparency and
                        security for every transaction.
                    </li>
                </ul>
            </div>
        )
    },
    {
        title: 'What are the Refill & Marketplace Strategies?',
        text: (
            <div className="text">
                Refill Solution: Shopcek Refill allows users to buy mobile top-ups, gift cards, e-gifts, and vouchers with cryptocurrencies, enhancing
                the practical use of digital assets in everyday transactions. This service is a step towards habitual cryptocurrency usage, laying the
                groundwork for the full marketplace. Marketplace Strategy: Shopcek aims to develop into a comprehensive e-commerce platform where
                users can effortlessly be both sellers and buyers, using cryptocurrencies for transactions. The strategy focuses on gradual blockchain
                integration and leveraging data from Merch and Refill initiatives to tailor the marketplace to user preferences, aiming for a
                commissionless e-commerce environment.
            </div>
        )
    },
    {
        title: 'What are the details of the Shopcek Airdrop Program?',
        text: (
            <div className="text">
                <p>
                    The Shopcek Airdrop Program plays a crucial role in enhancing user engagement and broadening our community through a dedicated
                    "Earn" feature on our platform. This feature rewards users with XP points for participating in various activities, which can later
                    be exchanged for our native token, SHPC, upon its launch.
                </p>

                <p>
                    The program stands out due to its extensive ecosystem rewards, dedicating 25% of our total token allocation to community
                    incentives, underscoring the program's importance. Participants gain early access to SHPC tokens, sidestepping the public sale's
                    competitive nature. With a gamified design, the program transforms interactions on our platform into rewarding challenges and
                    tasks, providing points that unlock additional rewards and benefits.
                </p>

                <p>
                    It integrates a mix of off-chain activities like referrals and social media engagement with on-chain activities, including daily
                    logins and active engagement on the website. A distinctive feature of Shopcek is the chance for users to own Shopcek Domain NFTs,
                    which enhances platform engagement and grants lifetime priority in rewards and airdrops. This initiative encourages deeper
                    community integration and motivates users with XP multipliers.
                </p>

                <p>
                    The Shopcek Airdrop Program is central to our mission of integrating blockchain technology with e-commerce, creating a rewarding
                    experience for our community. By incentivizing a comprehensive range of activities, the program lays a solid foundation for the
                    continuous growth and engagement of the Shopcek & its community.
                </p>
            </div>
        )
    },
    {
        title: 'What are the Payment Options?',
        text: (
            <div className="text">
                <ol>
                    <li>
                        SHPC Payments: Highlighting SHPC, our native token, we offer a 20% discount for its usage, promoting it as the primary payment
                        option.
                    </li>
                    <li>
                        Wallet Payments: We've included leading wallets such as MetaMask, XDEFI, OKX, and Bitget, with discounts ranging from 3% to
                        10% based on wallet partnerships, aiming for a smooth transaction process.
                    </li>

                    <li>
                        Chain Integrations: Supporting various blockchain networks, we accept their native tokens, offering discounts from 3% to 10%
                        based on our collaborations with these networks.
                    </li>

                    <li>
                        Crypto Payment Gateways: We're integrating with payment gateways like Binance Pay, Gate Pay, and Crypto.com Pay to enhance
                        platform convenience. Collaborative discounts of 3% to 10% are provided, encouraging the use of these trusted gateways.
                    </li>

                    <li>
                        Credit Card Payments: While credit card transactions are supported, our platform aims to offer an experience that highlights
                        the advantages of crypto payments, encouraging a shift towards cryptocurrency as the preferred payment method.
                    </li>
                </ol>
            </div>
        )
    }
]

export function Faq() {
    const [state, setState] = useState([false, false, false, false, false])

    const setReverse = (idx: number) => {
        const copyState = structuredClone(state)
        copyState[idx] = !copyState[idx]
        setState(copyState)
    }

    return (
        <React.Fragment>
            <section className="faq-page">
                <div className="faq" id="faq">
                    <div className="info">
                        <div className="title">FAQ</div>

                        <div className="sub-title">NEED ASSISTANCE?</div>

                        <hr />

                        <div className="text">
                            Discover questions addressing the most important aspects of Shopcek. Find clear, concise answers to enhance your
                            understanding of our platform
                        </div>

                        <div className="questions">
                            {data.map((item: any, idx: number) => {

                                return (
                                    <div
                                        className="box"
                                        onClick={() => {
                                            setReverse(idx)
                                        }}
                                    >
                                        <div className="top">
                                        <div className="title">{item.title}</div>
                                        
                                        <img src={state[idx]?minus:plus} alt="" />
                                        </div>

                                        {state[idx]?item.text:undefined}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <img className="question" src={question} alt="" />
                </div>
            </section>
        </React.Fragment>
    )
}
