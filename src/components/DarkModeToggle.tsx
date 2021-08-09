import { FiSun, FiMoon } from 'react-icons/fi'

interface DarkModeToggleProps {
    darkMode: boolean
    updateTheme: Function
}

const SunEmoji = () => { return <FiSun size={15} color="Orange" /> }

const MoonEmoji = () => { return <FiMoon size={15} /> }


function DarkModeToggle(props: DarkModeToggleProps) {
    const { darkMode, updateTheme } = props

    const toggleDarkMode = () => {
        localStorage.setItem('zenshopsDarkMode', (!darkMode).toString())
        updateTheme(!darkMode)
    }

    return (
        <div className="flex items-center mx-10">
            {SunEmoji()}
            <button
                type="button"
                aria-pressed="false"
                className={`
                relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer 
                transition-colors ease-in-out duration-200 focus:outline-none ${darkMode ? 'bg-dark-500' : 'bg-gray-200'
                    } mx-2
              `}
                onClick={() => toggleDarkMode()}
            >
                <span className="sr-only">Toggle Themes</span>
                <span
                    aria-hidden="true"
                    className={`
                  ${darkMode ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full
                  bg-white dark:bg-dark-700 shadow-lg transform ring-0 transition ease-in-out duration-200
                `}
                />
            </button>
            {MoonEmoji()}
        </div>
    )
}
export default DarkModeToggle;