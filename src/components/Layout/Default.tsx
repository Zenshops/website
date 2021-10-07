import React, { ReactNode, useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface DefaultLayoutProps {
    // hideHeader?: boolean
    // hideFooter?: boolean
    children: ReactNode
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    const { children } = props
    const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('zenshopsDarkMode')

        console.log(isDarkMode)

        if (!isDarkMode) {
            localStorage.setItem('zenshopsDarkMode', (!darkMode).toString())
        } else {
            setDarkMode(isDarkMode === 'true')
            document.documentElement.className = isDarkMode === 'true' ? 'dark' : ''
        }
    })

    const updateTheme = (isDarkMode: boolean) => {
        document.documentElement.className = isDarkMode ? 'dark' : ''
        setDarkMode(isDarkMode)
    }

    return (
        <>
            <div className="flex flex-col w-screen h-screen sm:w-screen sm:h-screen sm:select-none sm:overflow-hidden">
                <Header darkMode={darkMode} updateTheme={updateTheme} />
                <div className="h-auto max-w-full flex justify-center items-center mt-60 bg-gray-900 dark:bg-gray-900 sm:mx-10 ">
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    )

}

export default DefaultLayout;