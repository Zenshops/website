interface SectionContainerProps {
    children: React.ReactNode
    className?: string
}

const SectionContainer = ({ children, className }: SectionContainerProps) => (
    <div className={`lg:container mx-auto bg-gray-900 lg:w-screen relative flex justify-around items-center h-16 lg:px-12 xl:px-10 ${className}`}>
        {/* <div className={`container mx-auto px-6 lg:px-16 xl:px-20 relative py-16 sm:py-18 md:py-24 lg:py-24 ${className}`}> */}
        {children}
    </div>
)

export default SectionContainer;