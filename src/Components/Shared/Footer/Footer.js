import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row" data-aos="zoom-in">
                         
                        <div className="col-lg-2">
                            <div className="footer_item">
                                <h3>Explore</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">Services</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_item">
                                <h3>Legal</h3>
                                <ul>
                                    <li><Link to="/">Privacy policy</Link></li>
                                    <li><Link to="/">Terms of condition</Link></li>
                                    <li><Link to="/">Documentation</Link></li>
                                    <li><Link to="/">Help center</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;