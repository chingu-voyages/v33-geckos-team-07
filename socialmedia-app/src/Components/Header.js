import React from 'react';
import logo_camera from '../logo_camera.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-white">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-auto relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                    {/* Website logo */}
                        <a href="/" className="flex items-center px-2">
                            <img src={logo_camera} className="h-11 w-15 mr-2" alt="logo"></img>

                        </a>

                    </div>

                    {/* Branding name */}
                    <div className="flex text-orange items-center font-mono lg:text-3xl md:text-2xl sm:text-xl">
                        <h1>Travelli</h1>
                    </div>

                    <button
                        className="text-orange cursor-pointer  leading-none px-3 py-1 border-solid border-transparent rounded bg-transparent border block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div
                        className={
                            "lg:flex items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }>

                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-orange hover:text-black font-serif lg:text-lg lg:font-semibold md:font-normal md:text-md" href="/">
                                    Login
                                </a>
                            </li>
                    

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}
