import Link from "next/link"

const CDM = () => {
    return (
        <div className="cdm" id="cdm">
            <div className="inner">
                <div className="unparalled">
                    <h2>Anamo CDM - Unparalleled</h2>
                    <p>Anamo, commercial businesses and the US Government desire a functional ability that can present the most important security data to active dashboards. This functionality is ideal and provides a process to elevate resource allocations and define remediation priorities within their respective divisions and to the appropriate staff and authorities. CDM is simply superior Cybersecurity and Anamo CDM is the leading commercial solution.</p>

                    <Link href={""} className="link">Who are the over 100 US Federal Agencies that have already deployed CDM as a core capability of their Cybersecurity Defense program?</Link>

                    <p>Anamo is 24/7/365: In near Real-Time and On-Demand, Anamo CDM delivers a cross-section of many of the best Cybersecurity attributes and capabilities of industry verticals including:</p>

                    <ul>
                        <li>SIEM – Security Incident Event Management</li>
                        <li>EDR – Endpoint Detection & Response</li>
                        <li>ASM - Attack Surface Management</li>
                        <li>Vul-Scan - CVE Vulnerability Scanning</li>
                        <li>EPP - Endpoint Protection</li>
                        <li>BA - Behavior Awareness</li>
                    </ul>

                    <p className="click"><Link className="link" href={""}>Click here</Link>to get answers to your CDM program questions directly from CISA and the DHS</p>
                </div>
                <div className="what-is-cdm">
                    <h2>What is CDM?</h2>

                    <p>The Continuous Diagnostics and Mitigation (CDM) Program provides a dynamic approach to fortifying the cybersecurity capabilities of businesses and government agencies and the networks and systems that they manage and protect. CDM was created by the U.S. Department of Homeland Security and is a critical security component of CISA (Cybersecurity and Infrastructure Security Agency) of the United States of America.
                    </p>

                    <p>The DHS and CISA created the multi-billion-dollar CDM program in an effort to assemble critical Cybersecurity risk information and logically display various categories to certain Dashboards in as close to real-time as possible.</p>
                </div>
            </div>
        </div>
    )
}

export default CDM