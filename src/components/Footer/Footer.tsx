import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-center text-center lg:mt-auto sm:m-16 sm:mt-auto">
            © Copyright {new Date().getFullYear()} Zenshops Inc. Made with ♥︎ in Ireland.
        </div>
    );
}

export default Footer;
