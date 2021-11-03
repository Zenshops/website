import clsx from 'clsx';
import React, { ComponentProps, forwardRef } from 'react';
import { FieldError } from './Form';

interface InputProps extends ComponentProps<'input'> {
    label: string;
    placeholder?: string;
    error?: string;
    className?: string
    children?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, placeholder, children, className, type = 'text', error, ...props },
    ref,
) {
    return (
        <>
            <div className="flex justify-start items-center rounded font-medium bg-gray-700 dark:bg-gray-700 border-none text-gray-600 dark:text-gray-100 mb-1 w-full">
                {children && <div className="px-2 -mr-3">
                    {children}
                </div>}
                <input
                    className={clsx("flex justify-start items-center bg-gray-700 dark:bg-gray-600 border-none text-gray-100 dark:text-gray-100 w-full rounded px-4 py-3 border focus:border-brand-800 focus:transition focus:ease-in focus:ring-brand-900 focus:ring-2 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20 text-sm placeholder-gray-400 focus:placeholder-gray-300", className)}
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                    {...props}
                >
                </input>
                {/* {error && <FieldError errorName={error} />} */}
            </div>
        </>
    );
});
