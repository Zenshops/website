import React, { ReactNode } from 'react'

interface BodyProps {
    // hideHeader?: boolean
    // hideFooter?: boolean
    children: ReactNode
}

const Body: React.FC<BodyProps> = (props) => {

    return (
        <div className="h-auto max-w-full flex justify-center items-center mt-72 bg-gray-900 dark:bg-gray-900 sm:mx-10 ">
            <main>{props.children}</main>
        </div>
    )
}


export default Body;