import { ImSpinner11 } from 'react-icons/im';

interface Props {
  className?: string;
  loading?: boolean;
  disabled?: boolean;

  primary?: boolean;
  wide?: boolean;
  white?: boolean;
  small?: boolean;

  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

export const Button = ({
  className = '',
  loading,
  disabled,

  primary = false,
  wide = false,
  white = false,
  small = false,

  onClick,
  children,
}: Props) => {
  const baseClasses = `block font-bold rounded text-center ${wide ? 'w-full' : ''} ${
    small ? 'py-1 px-2 text-sm' : 'py-2 px-4'
  }`;
  const borderedClasses = 'border border-[#003366]';
  const outlinedClasses = 'bg-blue-50 text-blue-950 hover:bg-blue-100 disabled:bg-slate-100 disabled:text-slate-400';
  const primaryClasses = 'bg-[#003366] text-blue-50 hover:bg-[#194775] disabled:bg-blue-200 disabled:border-blue-100';
  const whiteClasses = 'bg-white border text-blue-950 hover:bg-slate-100 disabled:bg-slate-100 disabled:text-slate-400';

  const finalClasses = primary
    ? `${baseClasses} ${borderedClasses} ${primaryClasses}`
    : white
    ? `${baseClasses} ${whiteClasses}`
    : `${baseClasses} ${borderedClasses} ${outlinedClasses}`;

  return (
    <button disabled={disabled} className={`${finalClasses} ${className}`} onClick={onClick}>
      {loading ? <ImSpinner11 className="mx-auto animate-spin" /> : children}
    </button>
  );
};