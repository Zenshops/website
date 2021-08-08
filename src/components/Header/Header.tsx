import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import Logo from "./Logo";
import Button from "../ui/Button";
import { FiStar } from 'react-icons/fi'
import SectionContainer from "../Layout/SectionContainer";

// interface HeaderProps {
//     darkMode: Boolean
// }

const Header = (props: any) => {
    const { basePath } = useRouter()
    const githubIcon = (<FiStar size={15} />)

    // Left section
    const LogoSection = () => {
        return <Link href={'/'}>
            <a className="flex justify-center items-center"><Logo height="30px" width="140px" className="hover:cursor-pointer" /></a>
        </Link>
    }

    // Middle section
    const MenuSection = () => {
        return <>
            <div className="flex justify-start items-center text-sm font-extrabold">
                <div className="mx-8">Product</div>
                <div className="">Docs</div>
                <div className="mx-8">Pricing</div>
            </div>
        </>
    }

    // Right section
    const CallOutSection = () => {
        return (
            <div className="flex justify-center items-center">
                <Button type="secondary" text="Star us on GitHub" buttonIcon={githubIcon} textSize="xs" leadingSize="4" url="https://github.com/Zenshops/website"></Button>
            </div>
        )
    }

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                <SectionContainer>
                    <div className="flex justify-start">
                        {LogoSection()}
                        {MenuSection()}
                    </div>
                    <div className="flex justify-end">
                        {CallOutSection()}
                    </div>
                </SectionContainer>
            </nav>
        </div>
    )
}

export default Header;