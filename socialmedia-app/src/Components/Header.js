import React from 'react';
// import logo from '../logo512.png'

export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-white">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-auto relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                    {/* Website logo */}
                        <a href="/" className="flex items-center px-2">
                            <span className="material-icons h-8 w-8 mr-2">
                                add_a_photo
                            </span>
                        </a>

                    </div>

                    {/* Branding name */}
                    <div className="flex text-orange items-center font-mono lg:text-3xl md:text-xl xs:text-lg xl:pl-16">
                        <h1>Travelli</h1>
                    </div>

                    <div>

                    {/* Mobile nav */}
                        <button
                            className="text-orange cursor-pointer  leading-none px-3 py-1 
                            rounded bg-transparent border block 
                            lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <span className="material-icons">
                                reorder
                            </span>

                        </button>
                        <div
                            className={
                                "lg:flex items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }

                        >

                    {/* Primary nav links */}
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <a
                                        className="px-3 py-2 flex items-center text-orange font-serif lg:text-lg lg:font-semibold md:text-md md:font-normal"
                                        href="/"
                                    >
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="px-3 py-2 flex items-center items-center text-orange font-serif lg:text-lg lg:font-semibold md:text-md md:font-normal"
                                        href="/"
                                    >
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
