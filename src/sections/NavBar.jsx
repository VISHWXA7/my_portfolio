import { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({id, href, name}) => (
                <li key={id} className='nav-li'>
                    <a href={href} className='nav-li_a' onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust 100 based on the height of your hero section
            const heroHeight = 200;
            if (window.scrollY > heroHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-black' : 'bg-transparent'
            }`}
        >
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href='/' className='text-neutral-400 font-bold text-xl hover: transition-colors'>
                        Vishwaa
                    </a>

                    <button
                        onClick={toggleMenu}
                        className='text-neutral-400 hover:text-black focus:outline-none sm:hidden flex'
                        aria-label='Toggle menu'
                    >
                        <img
                            src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
                            alt='toggle'
                            className='w-6 h-6'
                        />
                    </button>

                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
