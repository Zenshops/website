import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import Logo from "./Logo";
import Button from "../ui/Button";
import { FiStar, FiMenu, FiX } from 'react-icons/fi'
import SectionContainer from "../Layout/SectionContainer";
import DarkModeToggle from "../DarkModeToggle";

interface HeaderProps {
    darkMode: boolean
    updateTheme: Function
}

interface HamburgerMenuProps {
    toggleFlyOut: Function
}

const Header = (props: HeaderProps) => {
    const { basePath } = useRouter()
    const githubIcon = (<FiStar size={15} />)
    const { darkMode, updateTheme } = props
    const [open, setOpen] = useState(false)
    const [showHamburger, setShowHamburger] = useState(false)

    React.useEffect(() => {
        if (open) {
            // Prevent scrolling on mount
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    // Left section
    const LogoSection = () => {
        return <Link href={'/'}>
            <a className="flex justify-center items-center"><Logo logoPath={darkMode ? '/images/Logo/LogoMixHorizontal.png' : '/images/Logo/LogoMixHorizontalBlack2.png'} height="30px" width="140px" className="hover:cursor-pointer" /></a>
        </Link>
    }

    // Middle section
    const MenuSection = () => {
        return <>
            <div className="flex justify-start items-center text-sm font-extrabold">
                <div className="mx-8 hover:cursor-pointer"><Link href="/product/product">Product</Link></div>
                <div className="">Docs</div>
                <div className="mx-8">Pricing</div>
            </div>
        </>
    }

    // Right section
    const CallOutSection = () => {
        return (
            <div className="flex justify-center items-center">
                <Button type="primary" text="Get Started" textSize="xs" leadingSize="4" url="/product/product"></Button>
            </div>
        )
    }

    const HamburgerMenuButton = (props: HamburgerMenuProps) => {
        return (<div
            className="absolute inset-y-0 left-0 px-2 flex items-center lg:hidden"
            onClick={() => props.toggleFlyOut()}
        >
            <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-700"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                {open ? <FiMenu size={20} /> : 
                    <FiX size={20} />}
            </button>
        </div>)
    }

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                <div>
                    {showHamburger ?
                        <HamburgerMenuButton toggleFlyOut={() => setOpen(true)} /> :
                        <SectionContainer>
                            <div className="flex justify-start">
                                {LogoSection()}
                                {MenuSection()}
                            </div>
                            <div className="flex justify-between">
                                {CallOutSection()}
                                <DarkModeToggle darkMode={darkMode} updateTheme={updateTheme} />
                            </div>
                        </SectionContainer>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header;