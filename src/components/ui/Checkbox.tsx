import React, { Children } from 'react';

interface CheckboxProps {
    title?: string
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    return (
        <>
            <label className="flex justify-center items-start cursor-pointer">
                <input
                    {...props}
                    className="w-5 h-5 mr-3 cursor-pointer bg-gray-700 text-gray-100 dark:text-gray-100 border-none dark:checked:bg-brand-900 dark:bg-gray-700 focus:checked:ring-offset-0 focus:ring-offset-0 focus:ring-0 checked:bg-brand-900 checked:flex-grow-1 checked:transition checked:ease-in transition ease-in-out checked:border-2 checked:border-brand-900 rounded focus:checked:ring-0 focus:checked:bg-brand-900 hover:checked:bg-brand-800"
                    type="checkbox"
                />
                <span className="text-sm text-gray-100 dark:text-gray-100 select-none">{props.title}</span>
            </label>
        </>
    );
};