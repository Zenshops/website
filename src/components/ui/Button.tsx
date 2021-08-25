import Link from "next/link";

type ButtonProps = {
    type?: "primary" | "secondary";
    text: string;
    url?: string;
    className?: string;
    hideArrow?: boolean;
    buttonIcon?: React.ReactNode;
    textSize?: "xs" | "sm" | "md" | "lg" | "xl";
    leadingSize?: "3" | "4" | "5" | "6" | "7" | "8";
};

const Button = (props: ButtonProps) => {
    const { type = "primary", text, url, className, hideArrow = false, buttonIcon, textSize = "xs", leadingSize = "4" } = props;

    const colorClass =
        type === "primary"
            ? `px-2 py-1.5 shadow-sm border border-transparent text-white bg-brand-700 hover:bg-brand-900 focus:ring-1 focus:ring-offset-1 focus:ring-brand-500`
            : "px-2 py-1.5 shadow-sm border dark:border-gray-600 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 focus:ring-1 focus:ring-offset-1 focus:ring-gray-500";

    const textClass =
        type === "primary"
            ? "font-medium left-2 group-hover:left-0"
            : "font-medium left-2 group-hover:left-0";

    const arrowClass =
        type === "primary" ? "" : "relative -left-0 group-hover:left-0 text-gray-300 dark:text-gray-400";

    let buttonStyles = {
        textShadow: "none",
    };
    if (type === "primary") {
        buttonStyles.textShadow = "0px 0px 6px rgba(76, 20, 187, 0.8)";
    }

    let iconClass =
        type === "primary"
            ? "mr-2 shadow-sm border border-transparent text-brand-100 font-medium focus:ring-1 focus:ring-offset-1 focus:ring-brand-500 font-medium left-2 group-hover:left-0"
            : "mr-2 shadow-sm border border-transparent text-gray-400 dark:text-gray-300 font-bold focus:ring-1 focus:ring-offset-0 focus:ring-gray-500 left-2 group-hover:left-0";

    const renderButton = () => (
        <button
            type='button'
            className={`
        inline-flex justify-center items-center text-xs font-extrabold leading-4 rounded-md
        focus:outline-none group transition ${colorClass} ${className}
      `}
            style={buttonStyles}
        >
            {buttonIcon && (
                <span className={`relative transition-all ${buttonIcon ? iconClass : ""}`}>
                    {buttonIcon}
                </span>
            )}
            <span className={`relative transition-all font-sans ${url ? textClass : ""}`}>
                {text}
            </span>
            {url && (
                <span className={`ml-2 transition-all opacity-0 group-hover:opacity-100 ${arrowClass}`}>
                    →
                </span>
            )}
        </button>
    );

    return url ? <Link href={url}>{renderButton()}</Link> : renderButton();
};

export default Button;
