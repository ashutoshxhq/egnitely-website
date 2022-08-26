import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="div-block-23 footer">
            <div className="div-block-24">
                <div className="div-block-39">
                    <div className="div-block-33"><img src="https://uploads-ssl.webflow.com/62fdc6f7159a6120ddd76c5a/62fddb98e7676465c1182c9c_egnitely.svg" loading="lazy" alt="egnitely logo" className="image-3" /></div>
                    <div className="text-block-18">Egnitely helps engineering teams to develop and deploy scalable backend applications faster and cheaper.<br /></div>
                </div>
                <div className="div-block-35">
                    <div className="text-block-16">Company</div>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/community" className="link">Community</Link>
                    <Link to="/changelog" className="link">Changelog</Link>
                </div>
                <div className="div-block-34">
                    <div className="text-block-16">Resources</div>
                    <a href="#" target={"_blank"} className="link">Desktop App</a>
                    <a href="https://developer.egnitely.com" target={"_blank"} className="link">Developers</a>
                    <a href="https://github.com/egnitely" target={"_blank"} className="link">Github Org</a>
                </div>
                <div className="div-block-36">
                    <div className="text-block-16">Legal</div>
                    <Link to="privacy-policy" className="link">Privacy Policy</Link>
                    <Link to="terms-of-service" className="link">Term of Service</Link>
                </div>
            </div>
            <div className="div-block-37">
                <div className="text-block-17">Copyright © 2022 Egnitely. All rights reserved.</div>
                <div className="text-block-17">support@egnitely.com</div>
            </div>
        </div>
    )
}

export default Footer