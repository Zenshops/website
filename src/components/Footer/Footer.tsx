import React from 'react';

const Footer = () => {
    return (
        <div className="absolute bottom-28 h-10 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
            © Copyright {new Date().getFullYear()} Zenshops Inc. Made with ♥︎ in Ireland.
        </div>
    );
}

export default Footer;
