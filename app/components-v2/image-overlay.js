"use client"

import Image from "next/image"
import { useEffect, useState } from "react";
import { RiCollapseDiagonalLine } from "react-icons/ri";

const ImageOverlay = ({ image, active, setActive }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (active) {
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }
    })

    return (
        <div className={active ? "image-overlay active" : "image-overlay"}>
            <div className="inner">
                <div className={!loading ? "image active" : "image"}>
                    <div className="collapse">
                        <RiCollapseDiagonalLine className="icon" onClick={() => {
                            setTimeout(() => {
                                setLoading(true)
                            }, 2000)
                            setActive(false)
                        }} />
                    </div>
                    <Image src={image} alt="Overlay Image" />
                </div>
                <div className={loading ? "loader-cover active" : "loader-cover"}>
                    <span className="loader"></span>
                    {/* <span className="loader1"></span> */}
                    {/* <span className="loader2"></span> */}
                    {/* <span className="loader3"></span> */}
                    {/* <span className="loader4"></span> */}
                    {/* <span className="loader5"></span> */}
                    {/* <span className="loader6"></span> */}
                    {/* <span className="loader7"></span> */}
                    {/* <span className="loader8"></span> */}
                    {/* <span className="loader9"></span> */}
                    <h4>Loading Image...</h4>
                </div>
            </div>
        </div>
    )
}

export default ImageOverlay

/* HTML: <div class="loader"></div> */