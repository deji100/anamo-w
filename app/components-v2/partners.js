import Image from "next/image"
import UsProTech from "/public/us-pro.webp"
import Linux from "/public/linux.webp"
import Unix from "/public/unix.webp"
import Solaris from "/public/solaris.webp"
import Aix from "/public/aix.webp"
import GoogleCloud from "/public/google-cloud.webp"
import Azure from "/public/azure.webp"
import Windows from "/public/windows.webp"
import Aws from "/public/aws.webp"
import Slide from "../animations/slide"

const Partners = () => {
    return (
        <div className="partners" id="partner">
            <Slide>
                <div className="inner">
                    <h2><span>Our</span>Partners</h2>
                    <div className="partner-list">
                        <Slide>
                            <Image className="bg" src={UsProTech} alt="USProTech" />
                        </Slide>
                        <Slide dir={"up"}>
                            <Image src={Linux} alt="Linux" />
                        </Slide>
                        <Slide>
                            <Image className="bg" src={Solaris} alt="Solaris" />
                        </Slide>
                        <Slide dir={"up"}>
                            <Image src={Windows} alt="Windows" />
                        </Slide>
                        <Slide>
                            <Image className="bg" src={GoogleCloud} alt="Google Cloud" />
                        </Slide>
                        <Slide dir={"up"}>
                            <Image src={Aix} alt="AIX" />
                        </Slide>
                        <Slide>
                            <Image className="bg" src={Azure} alt="Azure" />
                        </Slide>
                        <Slide dir={"up"}>
                            <Image src={Aws} alt="Aws" />
                        </Slide>
                        <Slide>
                            <Image className="bg" src={Unix} alt="Unix" />
                        </Slide>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Partners