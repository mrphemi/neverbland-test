import Link from "next/link";

import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-sh-blue-secondary py-10 w-full">
            <div className="container">
                <Logo />
            </div>
        </footer>
    );
};

export default Footer;
