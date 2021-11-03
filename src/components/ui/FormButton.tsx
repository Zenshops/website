import { ReactNode } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';

const variants = {
    primary: '',
    secondary: '',
    disabled: '',
};

const sizes = {
    small: '',
    large: '',
    full: '',
};

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variants?: keyof typeof variants;
    text: string;
    icon?: ReactNode;
    size?: keyof typeof sizes;
}

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <CgSpinnerTwo size={25} className="animate-spin" />
        </div>
    );
};

const Redirecting = () => {
    return (
        <div className="flex justify-center items-center">
            <CgSpinnerTwo size={20} className="animate-spin mr-3" />{' '}
            <span className="font-medium">Redirecting</span>
        </div>
    );
};

const FormButton = (props: FormButtonProps) => {
    const { formState } = useFormContext();

    const { text, type = 'text', icon } = props;

    return (
        <>
            <button
                className={clsx(
                    'text-center bg-brand-900 dark:bg-brand-900 text-gray-100 dark:text-gray-100 w-full rounded px-4 py-2.5 border disabled:opacity-60 disabled:bg-gray-500 border-none focus:ring-offset-0 focus:right-0 dark:focus:ring-offset-0 dark:focus:right-0 disabled:bg-opacity-20 hover:bg-brand-800 dark:hover:bg-brand-800 font-bold text-sm'
                )}
                type="submit"
            >
                {formState.isSubmitting
                    ? Spinner()
                    : formState.isSubmitSuccessful
                        ? Redirecting()
                        : icon
                            ? icon + ' ' + text
                            : text}
            </button>
        </>
    );
};

export default FormButton;
