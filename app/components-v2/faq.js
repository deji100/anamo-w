"use client"

import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

const Faq = ({ question, answer }) => {
    const [toggle, setToggle] = useState()
    return (
        <div className="faq">
            <h3 className="question" onClick={() => setToggle(prev => !prev)}>{question}<FaPlusSquare className={toggle ? "icon active" : "icon"} />
            </h3>
            <div className={toggle ? "answer active" : "answer"}>{answer}</div>
        </div>
    )
}

const Faqs = () => {
    return (
        <div className="faqs" id="faq">
            <div className="inner">
                <div className="title-desc">
                    <h2>Frequently Asked Questions</h2>
                    <p>We want to be the greatest help we can be to you. If you have a recommendation on how we can better improve our content, information delivery, or amplify our service, please contact us immediately and we’ll do our best to accommodate!</p>
                </div>
                <div className="faqs-list">
                    <div className="faq-list">
                        <Faq question={"How Much Does Anamo Cost? / How do I get a Quote for Anamo?"} answer={"Contact Sales: Sales@Anamo.io / 949.629.3900"} />
                        <Faq question={"Why would my company want to consider using Anamo CDM?"} answer={"Offering twice the capability at half the price seems to make sense to many"} />
                    </div>
                    <div className="faq-list">
                        <Faq question={"Does Anamo offer any Free Access to its CDM Platform?"} answer={"“Yes” Anamo offers limited Free-Trials and NFR Licensing to qualified Distributors & Partners."} />
                        <Faq question={"Does Anamo offer any special purchasing discount?"} answer={"“Yes” Anamo does provide special discounts to Social, Military, Educational, Religious, Fraternal and Political organizations."} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs