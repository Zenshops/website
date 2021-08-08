import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface LogoProps {
    height: string
    width: string
    className?: string | "";
}

function Logo({ height, width, className }: LogoProps) {
    return (
        <Image src="/images/Logo/LogoMixHorizontal.png" alt="Zenshops Logo" height={height} width={width} />
    )
}

export default Logo;