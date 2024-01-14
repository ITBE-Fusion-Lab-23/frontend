import React from "react"
import blackPretzelLogo from '../images/blackpretzel.png';



const Footer = () => (
    <footer className="page-footer font-small blue pt-4">

        <div className="container-fluid text-center text-md-left">
            <div className="row">
                {/* First Column */}
                <div className="col-md-3 mt-md-0 mt-3" style={{ paddingTop: '7rem' }}>

                    <img src={blackPretzelLogo} alt="Pretzel Logo" style={{ width: 60, filter: 'invert(100%)', marginBottom: 20 }} />
                    <h5 className="text-uppercase">Group A</h5>
                </div>

                {/* Second Column */}
                <div className="col-md-3 mb-md-0 mb-3" style={{ paddingTop: '4rem' }}>
                    <div className="text-uppercase" style={{ fontSize: '16px', fontWeight: 'bold', textAlign: "left", marginBottom: 25 }}>Information</div>
                    <ul className="list-unstyled footer-list">
                        <li><span>Main</span></li>
                        <li><span>Introduction</span></li>
                        <li><span>Comment</span></li>
                        <li><span>Vote</span></li>
                    </ul>
                </div>

                {/* Third Column */}
                <div className="col-md-3 mb-md-0 mb-3" style={{ paddingTop: '4rem' }}>
                    <div className="text-uppercase" style={{ fontSize: '16px', fontWeight: 'bold', textAlign: "left", marginBottom: 25 }}>Contacts</div>
                    <ul className="list-unstyled footer-list">
                        <li style={{ marginBottom: '40px' }}>
                            <i className="bi bi-geo-alt" style={{ verticalAlign: 'top' }}></i>
                            <span style={{ display: 'inline-block', marginLeft: '10px' }}>
                                <div>Arcisstraße 21,</div>
                                <div>80333 München04</div>
                            </span>
                        </li>
                        <li style={{ marginBottom: '30px' }}>
                            <i className="bi bi-telephone" style={{ marginRight: '10px' }}></i>
                            <span>
                                0000000000
                            </span>
                        </li>
                        <li>
                            <i className="bi bi-envelope" style={{ marginRight: '10px' }}></i>
                            <span>
                                ge84xof@tum.de</span>
                        </li></ul>
                </div>

                {/* Fourth Column */}
                <div className="col-md-3 mb-md-0 mb-3" style={{ paddingTop: '4rem' }}>
                <div className="text-uppercase" style={{ fontSize: '16px', fontWeight: 'bold', textAlign: "left", marginBottom: 25 }}>Social Media</div>
                    <div style={{ textAlign: 'left' }}>
                        <a href="https://facebook.com" style={{ marginRight: '30px' }}>
                            <i className="bi bi-facebook" style={{ fontSize: '18px', color: 'white' }}></i>
                        </a>
                        <a href="https://twitter.com" style={{ marginRight: '30px' }}>
                            <i className="bi bi-twitter" style={{ fontSize: '18px', color: 'white' }}></i>
                        </a>
                        <a href="https://linkedin.com" style={{ marginRight: '30px' }}>
                            <i className="bi bi-linkedin" style={{ fontSize: '18px', color: 'white' }}></i>
                        </a>
                       
                    </div>
                </div>

            </div>
        </div>

        {/* Footer Copyright */}

        <div className="footer-copyright text-center py-3">© 2024 Copyright:
            <a > All Rights Reserved</a>
        </div>

    </footer>);

export default Footer;