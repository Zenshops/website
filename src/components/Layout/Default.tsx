import React, { ReactNode } from 'react'
import Header from '../Header/Header';

interface DefaultLayoutProps {
    // hideHeader?: boolean
    // hideFooter?: boolean
    children: ReactNode
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    const { children } = props
    // const [darkMode, setDarkMode] = useState<boolean>(true)

    // useEffect(() => {
    //     const isDarkMode = localStorage.getItem('zenshopsDarkMode')

    //     if (isDarkMode) {
    //         setDarkMode(isDarkMode === 'true')
    //         document.documentElement.className = isDarkMode === 'true' ? 'dark' : ''
    //     }
    // })

    return (
        <>
            <Header />
            <div className="min-h-full bg-white dark:bg-gray-900">
                <main>{children}</main>
            </div>
        </>
    )

}

export default DefaultLayout;