import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

interface TextLinkProps {
    url: string
    label: string
}

function TextLink({ url, label }: TextLinkProps) {
    return (
        <Link href={url}>
            <a className="block text-sm text-gray-400 dark:text-gray-400 mt-3">
                <div className="flex items-center">
                    <span>{label}</span>
                    <span className="ml-2">
                        <FiArrowRight size={15} />
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default TextLink;