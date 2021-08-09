import React from 'react'

interface LogoProps {
    height: string
    width: string
    className?: string | "";
    logoPath: string
}

function Logo({ height, width, className, logoPath }: LogoProps) {
    return (
        <img src={logoPath} alt="Zenshops Logo" height={height} width={width} />
    )
}

export default Logo;