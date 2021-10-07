import React, { Fragment, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import Logo from "./Logo";
import Button from "../ui/RegularButton";
import { FiStar, FiMenu, FiX } from 'react-icons/fi'
import SectionContainer from "../Layout/SectionContainer";
import { Transition } from '@headlessui/react'

interface HeaderProps {
    darkMode: boolean
    updateTheme: Function
}

interface HamburgerMenuProps {
    toggleFlyOut: Function
}

const Header = (props: HeaderProps) => {
    const router = useRouter()
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
        return (
            <Link href={'/'}>
                <a className="lg:flex justify-center items-center"><Logo logoPath={'/images/Logo/LogoWhiteHorizontal.png'} height="30px" width="140px" className="hover:cursor-pointer" /></a>
            </Link>
        )
    }

    // Middle section
    const MenuSection = () => {
        return <>
            <div className="lg:flex lg:justify-start lg:items-start text-sm font-extrabold sm:hidden">
                <div className="ml-6 mr-2 p-2 hover:cursor-pointer"><Link href="/product">Product</Link></div>
                <div className="mx-2 p-2 hover:cursor-pointer"><Link href="/about">Docs</Link></div>
                <div className="mx-2 p-2 hover:cursor-pointer"><Link href="/pricing">Pricing</Link></div>
            </div>
        </>
    }

    // Right section
    const CallOutSection = () => {
        return (
            <div className="lg:flex justify-center items-center sm:hidden">
                <Button type="primary" text="Get Started" textSize="xs" leadingSize="4" url="/product"></Button>
            </div>
        )
    }

    const HamburgerMenuButton = (props: HamburgerMenuProps) => {
        return (<div
            className="absolute z-50 inset-y-0 left-0 px-2 flex items-center lg:hidden"
            onClick={() => props.toggleFlyOut()}
        >
            <button
                className="bg-dark-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-brand-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-brand-500 dark:text-gray-100 dark:bg-dark-800"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                {!open ? <FiMenu size={20} /> :
                    <FiX size={20} />}
            </button>
        </div>)
    }

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-dark-900-900 dark:bg-dark-900 border-b border-gray-700 dark:border-gray-700">
                <div>
                    <HamburgerMenuButton toggleFlyOut={() => { setOpen(true) }} />
                    <SectionContainer className="lg:h-16 sm:h-16">
                        <div className="lg:flex lg:justify-start lg:mx-0 sm:mx-auto items-center">
                            {LogoSection()}
                            {MenuSection()}
                        </div>
                        <div className="flex justify-between">
                            {CallOutSection()}
                            {/* <DarkModeToggle darkMode={darkMode} updateTheme={updateTheme} /> */}
                        </div>
                    </SectionContainer>

                    <Transition
                        as={Fragment}
                        appear={true}
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <div className="p-4 md:p-8 h-screen w-screen fixed bg-dark-900 transform overflow-y-scroll -inset-y-0 z-50 dark:bg-dark-900">
                            <div className="absolute right-4 top-4 items-center justify-between">
                                <div className="-mr-2">
                                    <button
                                        onClick={() => setOpen(false)}
                                        type="button"
                                        className="bg-dark-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-brand-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-brand-500 dark:text-gray-100 dark:bg-dark-800"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <FiX size={20} />
                                    </button>
                                </div>
                            </div>
                            {/* </div> */}
                            <div className="mt-6 mb-12">
                                <div className="p-2 pb-4 space-y-1">
                                    {LogoSection()}
                                </div>
                                <div className="pt-2 pb-4 space-y-1">
                                    <Link href="/product"><div className="cursor-pointer block pl-3 pr-4 py-2 text-base font-medium text-gray-100 hover:rounded hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white">
                                        Product
                                    </div></Link>
                                    <Link href="/about"><div className="cursor-pointer block pl-3 pr-4 py-2 text-base font-medium text-gray-100 hover:rounded hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white">
                                        About
                                    </div></Link>
                                    <Link href="/pricing"><div className="cursor-pointer block pl-3 pr-4 py-2 text-base font-medium text-gray-100 hover:rounded hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-dark-600 hover:border-gray-300 dark:text-white">
                                        Pricing
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </nav >
        </div >
    )
}

export default Header;