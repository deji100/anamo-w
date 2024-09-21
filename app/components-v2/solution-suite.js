"use client"

import { useState, useEffect } from "react"
import { data, links } from "./data";
import Image from "next/image";
import SlideX from "../animations/slideX";
import { AiOutlineSend } from "react-icons/ai";
import ImageOverlay from "./image-overlay";

const SolutionSuite = () => {
    const [idx, setIdx] = useState(1);
    const [active, setActive] = useState(false)

    const content = data?.find(d => d.id === idx)

    return (
        <div className="solution" id="solution">
            <ImageOverlay image={content?.image} active={active} setActive={setActive} />
            <div className="inner">
                <h2>Comprehensive Cybersecurity
                    Solution suite
                </h2>
                <div className="nav-content">
                    <div className="nav">
                        {
                            links?.map((li, index) => (
                                <span key={index + 1} onClick={() => setIdx(index + 1)} className={idx === index + 1 ? "active" : "normal"}><AiOutlineSend className={idx === index + 1 ? "icon active" : "icon"} />{li}</span>
                            ))
                        }
                    </div>
                    <div className="content">
                        <SlideX>
                            <Image src={content?.image} onClick={() => setActive(prev => !prev)} alt={`${content.id}`} />
                        </SlideX>
                        <div className="details">
                            <p>{content?.p1}</p>
                            <p>{content?.p2}</p>
                            <p>{content?.p3}</p>
                            <ol>
                                {
                                    content?.list.map((c, ind) => (
                                        <li key={ind}>
                                            <h3>{c.title}</h3>
                                            <p>{c.desc}</p>
                                        </li>
                                    ))
                                }
                            </ol>
                            <p>{content?.p4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionSuite