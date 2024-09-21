import Image from "next/image"
import Dashboard from "/public/dashboard.webp"
import Slide from "../animations/slide"

const About = () => {
    return (
        <div className="about" id="about">
            <div className="inner">
                <h2>What makes Anamo Unique?</h2>
                <p>Anamo CDM, a patent-pending commercial-grade CDM Cybersecurity platform, has answered the call of CISA, the DHS, and other requests from the DoD Supply-Chain.
                </p>

                <p>Harnessing the power of advanced ML and Generative AI, Anamo CDM is pushing toward the delivery of “Predictive Cybersecurity Threat Extrapolation.” How so? Anamo collects essential User, Group, Risk, Permission, Vulnerability, Software, History, and Forensic data and dynamically delivers that requested information in near Real-Time. Due to the platform service delivery, Anamo has captured broad interest from US- based enterprise businesses and many members/agencies across the US Aerospace and Defense supply chain. Subsequently, Anamo has enjoyed receiving invitations to visits at both the White House and the Pentagon.
                </p>
                <Slide>
                    <div className="content">
                        <Image src={Dashboard} alt="Dashboard" />
                    </div>
                </Slide>

            </div>
        </div>
    )
}

export default About