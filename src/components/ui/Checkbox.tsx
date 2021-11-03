import React, { Children, forwardRef } from 'react';

interface CheckboxProps {
    title?: string
    checked?: boolean
    disabled?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Input({ title, checked, disabled, ...props }, ref) {
    return (
        <>
            <label className="flex justify-center items-start cursor-pointer">
                <input
                    className="w-5 h-5 mr-3 cursor-pointer bg-gray-700 text-gray-100 dark:text-gray-100 border-none dark:checked:bg-brand-900 dark:bg-gray-700 focus:checked:ring-offset-0 focus:ring-offset-0 focus:ring-0 checked:bg-brand-900 checked:flex-grow-1 checked:transition checked:ease-in transition ease-in-out checked:border-2 checked:border-brand-900 disabled:bg-gray-700 disabled:hover:bg-gray-600  rounded focus:checked:ring-0 focus:checked:bg-brand-900 hover:checked:bg-brand-800"
                    type="checkbox"
                    ref={ref}
                    checked={checked}
                    disabled={disabled}
                    {...props} />
                <span className="text-sm text-gray-100 dark:text-gray-100 select-none">{title}</span>
            </label>
        </>
    )
})