import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#18191A] text-white p-8 mt-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div>
                    <img src="/logo.png" alt="Logo" className="w-32 mb-4 bg-white p-3" />
                    <p className="text-sm">The proper Footer on proper time can preserve you protection. We assist you make sure everybody forward.</p>
                    <div className="flex space-x-3 mt-4 text-xl">
                        <span className="  "><FaFacebook size={30}/></span>
                        <span className=" "><FaInstagram size={30}/></span>
                        <span className=""><FaLinkedin size={30}/></span>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Services</h3>
                    <ul className="text-sm space-y-2">
                        <li>3D Designing</li>
                        <li>3D Printing</li>
                        <li>CNC Machining</li>
                        <li>Battery Packs</li>
                        <li>Laser Cutting</li>
                        <li>Wiring Harnesses</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="text-sm space-y-2">
                        <li>Products</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Support</li>
                        <li>Account</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">More</h3>
                    <ul className="text-sm space-y-2">
                        <li>Cart</li>
                        <li>Location</li>
                        <li>Track Orders</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="font-semibold mb-3">Subscribe</h3>
                    <input type="email" placeholder="Enter Email" className="w-full p-2 mb-2 rounded text-black border-orange-400" />
                    <button className="bg-orange-500 px-4 py-2 rounded">Submit</button>
                </div>
            </div>
            <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
                © 2025 All Rights Reserved.
            </div>
            <p className="text-sm text-center">Developed & Maintain by <span className="font-bold underline cursor-pointer text-[#86EFAC]">www.arevei.com</span></p>
        </footer>
    );
};

export default Footer;