"use client"

import Image from "next/image";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import Logo from "@/public/logo.webp";
import { MdOutlinePlayCircle } from "react-icons/md";
import SlideX from "../animations/slideX";
import Slide from "../animations/slide";
import { IoIosArrowRoundForward } from "react-icons/io";
import Links from "./links";

const Hero = () => {
    return (
        <div className="hero">
            <nav>
                <Link href={""}>
                    <Image
                        src={Logo}
                        alt="Company Logo"
                    />
                </Link>
                <Links />
                <Link href="https://app.anamo.io/login/?next=/" passHref>
                    <button aria-label="Login">
                        <CiLogin className="icon" />Login
                    </button>
                </Link>
            </nav>
            <header>
                <video loop autoPlay muted>
                    <source src="https://amorserv-assets.s3.amazonaws.com/amoservtech/v2.mp4" type="video/mp4" />
                    <source src="https://access-405167844357.s3-accesspoint.us-east-2.amazonaws.com/v3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="layer"></div>
                <div className="content">
                    <div className="title">
                        <h1>
                            <SlideX direction={"right"} delay={.50}>
                                <span>Anamo is CDM,</span>
                            </SlideX>
                            <SlideX direction={"right"} delay={1}>
                                <span>A Cybersecurity Platform</span>
                            </SlideX>
                            <SlideX direction={"right"} delay={1.5}>
                                <span>Delivering Continuous,</span>
                            </SlideX>
                            <SlideX direction={"right"} delay={2}>
                                <span>Diagnostics, & Mitigation</span>
                            </SlideX>
                        </h1>
                        <Slide>
                            <div className="btns">
                                <button>Get Started <IoIosArrowRoundForward className="icon" /></button>
                                <button>DHS/CDM Video <MdOutlinePlayCircle className="icon" /></button>
                            </div>
                        </Slide>
                        <Slide>
                            <ul>
                                <li>Live Dashboard</li>
                                <li>Insider-Threat</li>
                                <li>Vulnerability</li>
                                <li>Permissions</li>
                                <li>Zero Trust</li>
                                <li>Forensics</li>
                            </ul>
                        </Slide>
                    </div>
                    <div className="desc">
                        <Slide dir={"up"}>
                            <p>ANAMO is the 1st commercially available CDM software platform, built upon a common programming language, which address all major components of the DHS CDM Cybersecurity program. Anamo combines these specific and critical areas of risk management to simplify attack surface management (ASM).</p>
                        </Slide>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Hero;
