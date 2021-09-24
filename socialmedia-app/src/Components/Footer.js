import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="bg-orange w-screen absolute inset-x-0 bottom-0 lg:h-20">

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

                <div className="flex flex-wrap text-black hover:text-white items-center lg:pt-5 md:pt-4 pt-3 xl:pl-28 md:pl-10 pl-3 font-mono lg:text-3xl md:text-xl">
                    <a href="/">Travelli</a>
                </div>

                <div className="flex flex-wrap lg:pt-5 md:pt-4 xl:pl-24 items-center content-center">
                    <div>
                        <a href="https://github.com/CharlieArray" target="_blank" rel="noreferrer" className="px-3 py-2 flex items-center items-center text-black hover:text-white font-serif lg:text-lg">
                            <FontAwesomeIcon icon={faGithub} className="text-xl" />
                               CharlieArray
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/christine-gk416" target="_blank" rel="noreferrer" className="px-3 py-2 flex items-center text-black hover:text-white font-serif lg:text-lg">
                            <FontAwesomeIcon icon={faGithub} className="text-xl" />
                               Christine-gk416
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
  
  export default Footer;