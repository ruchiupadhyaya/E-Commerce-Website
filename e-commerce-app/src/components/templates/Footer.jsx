import React from 'react'
import { NavLink } from "react-router-dom";

import '../css/Footer.css'
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="imformationforms">
                    <div>
                    <span>Connect With Us</span>
                    <NavLink to="/helpcenter/suggetion">Give Suggestions</NavLink>
                    <NavLink to="/helpcenter/complaint">Register Complaint</NavLink>
                    </div>
                    <div className="contactdetails">
                        <span> Contact Us  </span><div>Email : himalayashoppingproject@gmail.com <br />Number : +919999999999 </div>
                    </div>
                </div>
                <div className="footername">
                    Pillai College of Engineering
                </div>
            </footer>
        </>
    )
}

export default Footer
