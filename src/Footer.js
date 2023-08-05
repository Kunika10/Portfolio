import React from 'react'
import { Container } from 'react-bootstrap';
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <section id='footer' className='footer-section bg-light'>
                <Container>
                    <div className='footer'>
                        <div className='footersec1'>
                            <p className='footerdetails'>
                                <Link to='mailto:guptakunika10@gmail.com'>
                                    <span><FaEnvelope /></span>
                                    guptakunika10@gmail.com</Link>
                            </p>
                        </div>
                        <div className='footerSec2'>
                            <p>Kunika Gupta © 2023 All rights reserved.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default Footer;