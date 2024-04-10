import React from 'react';
import '../App.css';
import '../css/Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
return (
        <footer className="new_footer_area bg_color">
            <div>
                    <h3>Merci de votre visite</h3>
                    <table className='table'>
                            <tr>
                                    <td className='title-footer'>Contact</td>
                                    <td className='title-footer'>Réseaux</td>
                            </tr>
                            <tr>
                                    <td className='content-footer'>theo.gandon9@gmail.com</td>
                                    <td className='content-footer'><a href='https://github.com/TheoGandon' target='_blanck'><FaGithub className='icon-footer' /></a></td>
                                    <td className='content-footer'><a href='https://www.linkedin.com/in/theo-gandon-4b7b3a269/' target='_blanck'><FaLinkedin className='icon-footer' /></a></td>
                            </tr>
                    </table>
            </div>
                    <div className="new_footer_top">
                            <div className="footer_bg">
                                    <div className="footer_bg_one"></div>
                                    <div className="footer_bg_two"></div>
                            </div>
                    </div>
                    <div className="footer_bottom">
                            <div className="container">
                                    <div className="row align-items-center">
                                            <div className="col-lg-6 col-sm-7">
                                            <button className='btn-footer'>A propos</button><button className='btn-footer'>Les mentions légales</button><button className='btn-footer'>La politique de confidentialité</button>
                                                    <p className="mb-0 f_800">© Theo Gandon 2024 All rights reserved.</p>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </footer>
);
};

export default Footer;
