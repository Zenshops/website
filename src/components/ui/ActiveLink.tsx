import { useRouter } from 'next/router'
import React from 'react'
import clsx from 'clsx'

interface ActiveLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href }) => {
    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} className={`${clsx(router.asPath === href ? "p-2 bg-brand-100 rounded" : "")} p-2`}>
            {children}
        </a>
    )
}

export default ActiveLink;