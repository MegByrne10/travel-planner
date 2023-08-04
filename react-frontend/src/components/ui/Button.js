import classnames from "classnames";
import { twMerge } from "tailwind-merge";

const styles = {
  base: 'inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold transition-all text-sm focus:ring-2',
  baseOutline: 'bg-theme-light dark:bg-gray-600 border-2 font-semibold hover:text-white focus:ring-2',
  disabled: 'opacity-50 cursur-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'py-1 px-2 text-sm',
    default: 'py-3 px-4',
    large: 'py-3 px-8 text-lg'
  },
  varient: {
    primary: 'bg-jadeMountain-500 hover:bg-jadeMountain-600 focus:ring-jadeMountain-700 text-white',
    secondary: 'bg-fuchsiaFever-500 hover:bg-fuchsiaFever-600 focus:ring-fuchsiaFever-700 text-white',
    accent: 'bg-alexisBlue-500 hover:bg-alexisBlue-600 focus:ring-alexisBlue-700 text-white',
    warning: 'bg-amber-500 hover:bg-amber-600 focus:ring-amber-700 text-white',
    danger: 'bg-red-500 hover:bg-red-600 focus:ring-red-700 text-white',
  },
  varientOutline: {
    primary: 'border-jadeMountain-200 text-jadeMountain-500 hover:bg-jadeMountain-500 hover:border-jadeMountain-500 focus:ring-jadeMountain-400',
    secondary: 'border-fuchsiaFever-200 text-fuchsiaFever-500 hover:bg-fuchsiaFever-500 hover:border-fuchsiaFever-500 focus:ring-fuchsiaFever-400',
    accent: 'border-alexisBlue-200 text-alexisBlue-700 hover:bg-alexisBlue-500 hover:border-alexisBlue-500 focus:ring-alexisBlue-400',
    warning: 'border-amber-200 text-amber-500 hover:bg-amber-500 hover:border-amber-500 focus:ring-amber-400',
    danger: 'border-danger-200 text-danger-500 hover:bg-danger-500 hover:border-danger-500 focus:ring-danger-400',
  }
}

function Button({
  children,
  primary,
  secondary,
  accent,
  warning,
  danger,
  outline,
  rounded,
  small,
  large,
  disabled,
  ...rest
}) {
  const classes = classnames(rest.className, styles.base, {
    [`${styles.size.default}`]: !small || !large,
    [`${styles.size.small}`]: small,
    [`${styles.size.large}`]: large,
    [`${styles.varient.primary}`]: primary,
    [`${styles.varient.secondary}`]: secondary,
    [`${styles.varient.accent}`]: accent,
    [`${styles.varient.warning}`]: warning,
    [`${styles.varient.danger}`]: danger,
    [`${styles.pill}`]: rounded,
    [`${styles.baseOutline}`]: outline,
    [`${styles.varientOutline.primary}`]: outline && primary,
    [`${styles.varientOutline.secondary}`]: outline && secondary,
    [`${styles.varientOutline.accent}`]: outline && accent,
    [`${styles.varientOutline.warning}`]: outline && warning,
    [`${styles.varientOutline.danger}`]: outline && danger,
    [`${styles.disabled}`]: disabled
  });

  const mergedClasses = twMerge(classes)

  return (
    <button {...rest} disabled={disabled} className={mergedClasses}>
      {children}
    </button>
  ); 
}

export default Button;