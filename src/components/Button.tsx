import { ImSpinner11 } from 'react-icons/im';

interface Props {
    className?: string;
    loading?: boolean;
    disabled?: boolean;

    primary?: boolean;
    wide?: boolean;

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
}

export const Button = ({
    className = '',
    loading,
    disabled,

    primary = false,
    wide = false,

    onClick,
    children,
}: Props) => {
    const baseClasses = `block border font-bold py-2 px-4 rounded border-[#003366] text-center ${wide ? 'w-full' : ''}`;
    const outlinedClasses = 'bg-blue-50 text-blue-950 hover:bg-blue-100 disabled:bg-slate-100 disabled:text-slate-400';
    const primaryClasses = 'bg-[#003366] text-blue-50 hover:bg-[#194775] disabled:bg-blue-200 disabled:border-blue-100';

    const finalClasses = primary ? `${baseClasses} ${primaryClasses}` : `${baseClasses} ${outlinedClasses}`;

    return (
        <button
            disabled={disabled}
            className={`${finalClasses} ${className}`}
            onClick={onClick}
        >
            {loading ? <ImSpinner11 className="mx-auto animate-spin" /> : children}
        </button>
    );
};