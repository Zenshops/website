import React from 'react'

interface LogoProps {
    height: string
    width: string
    className?: string | "";
}

function Logo({ height, width, className }: LogoProps) {
    return (
        <img src="/images/Logo/LogoMixHorizontal.png" alt="Zenshops Logo" height={height} width={width} />
    )
}

export default Logo;