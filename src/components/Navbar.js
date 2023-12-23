import React from 'react';
import logo from '../assets/logo.png';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    React.useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
    
        const handleLinkClick = (event) => {
            links.forEach(link => {
                if (link === event.target) {
                    link.classList.add('text-[#3AB7B3]');
                } else {
                    link.classList.remove('text-[#3AB7B3]');
                }
            });
        };
    
        links.forEach(link => {
            if (link.getAttribute('href') === window.location.hash) {
                link.classList.add('text-[#3AB7B3]');
            }
            link.addEventListener('click', handleLinkClick);
        });
    
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, [window.location.hash]);
    
    
    



    return (
        <div className="absolute top-0 w-full bg-white">
            <div className="flex items-center justify-between px-6 md:px-36 py-5 md:py-7">
                <div className="flex items-center gap-x-14">
                    <a href="/" aria-label="Home" className="block">
                        <img src='./logo.svg' alt="logo" className="h-5 w-24 md:h-7 md:w-36" />
                    </a>
                </div>
                <div className={`hidden text-black font-normal text-lg md:flex gap-16 ${toggleMenu ? 'hidden' : 'block'}`}>
                    <a href="#" className="nav-link">About</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                    <a href="#testimonial" className="nav-link">Testimonials</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={ ()=> setToggleMenu(true)}>
                        <svg className="w-6 h-6" fill="none" stroke='black' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-3/4 h-full bg-white z-50 transform ${toggleMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="md:hidden text-black font-normal text-lg flex flex-col mx-5 gap-4 ">
                    <div className='flex justify-between py-5'>
                        <div className="flex items-center gap-x-14">
                            <a href="/" aria-label="Home" className="block">
                                <img src='./logo.svg' alt="logo" className="h-5 w-24 md:h-7 md:w-36" />
                            </a>
                        </div>
                        <button className="close-button" onClick={()=>setToggleMenu(false)}>
                        <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    </div>
                    <a href="#" className="nav-link">About</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                    <a href="#testimonial" className="nav-link">Testimonials</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </div>
            </div>
        </div>
    );
};
