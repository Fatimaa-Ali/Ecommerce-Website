import React from 'react';
import footerLogo from "../../assets/gym3.png";
import Banner from "../../assets/websites/footer-pattern.jpeg";
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,  // ✅ Fixed Template Literal
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",  // ✅ Valid CSS Height
    width: "100%",
};

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/#blog" },
];

const Footer = () => {
    return (
        <div style={BannerImg} className="text-white mb-20">
            <div className="container">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                    {/* Company Details */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src={footerLogo} alt="BlackBurn Logo" className="max-w-[50px]" />
                            BlackBurn
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni autem, quas quo similique temporibus cum alias.</p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        {/* Important Links */}
                        <div className="py-8 px-4">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                        <a href={link.link}>{link.title}</a>  {/* ✅ Corrected Link */}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional Links */}
                        <div className="py-8 px-4">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                            <ul className="flex flex-col gap-3">
                                {FooterLinks.map((link) => (
                                    <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                        <a href={link.link}>{link.title}</a>  {/* ✅ Corrected Link */}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social & Contact Info */}
                        <div>
                            {/* Social Links */}
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#"><FaInstagram className="text-3xl" /></a>
                                <a href="#"><FaFacebook className="text-3xl" /></a>
                                <a href="#"><FaLinkedin className="text-3xl" /></a>
                            </div>

                            {/* Contact Info */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Lahore, Pakistan</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMobileAlt />  {/* ✅ Corrected Icon */}
                                    <p>+92 345980045</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
