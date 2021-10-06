import React, { ReactNode, useEffect, useState } from 'react'
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
        <div className="w-screen select-none">
            <Header darkMode={darkMode} updateTheme={updateTheme} />
            <div className="min-h-full max-w-full flex justify-center items-center bg-gray-900 dark:bg-gray-900 m-auto sm:mx-10">
                <main>{children}</main>
            </div>
        </div>
    )

}

export default DefaultLayout;