import React from 'react';
import footer from '../../../../assets/images/footer.png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (

        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className=" px-10 ">
            <div className='footer pt-20'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency chackup</a>
                    <a className="link link-hover">Monthly cahackup</a>
                    <a className="link link-hover">Weekly chackup</a>
                    <a className="link link-hover">Deep chackup</a>
                </div>
                <div>
                    <span className="footer-title ">Oral Health</span>
                    <a className="link link-hover">Flourida Treathment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York -10010010 Hudson</a>
                </div>
            </div>
            <p className='text-center pt-20'>Copyright © {year} - All right reserved </p>
        </footer>
    );
};

export default Footer;