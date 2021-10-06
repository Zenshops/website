import React, { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'input'> {
    label: string;
    placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
    { label, placeholder, type = 'text', ...props },
    ref,
) {
    return (
        <div className="font-medium text-gray-800 dark:text-gray-100 mb-1 w-96">
            <input
                className="bg-gray-700 dark:bg-gray-700 border-none text-gray-100 dark:text-gray-100 w-full rounded px-4 py-3 border focus:border-brand-800 focus:transition focus:ease-in focus:ring-brand-900 focus:ring-2 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20 text-sm placeholder-gray-300"
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        </div>
    );
});
