import classnames from "classnames";
import { twMerge } from "tailwind-merge";

const styles = {
  base: 'inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 focus:outline-none focus:ring-2',
  baseOutline: 'bg-white border-2 font-semibold hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
  disabled: 'opacity-50 cursur-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'py-1 px-2 text-sm',
    default: 'py-3 px-4',
    large: 'py-3 px-8 text-lg'
  },
  varient: {
    primary: 'bg-primary-400 hover:bg-primary-600 focus:ring-primary-400 text-white',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 text-white',
    success: 'bg-success-500 hover:bg-success-600 focus:ring-success-500 text-white',
    info: 'bg-info-500 hover:bg-info-600 focus:ring-info-500 text-white',
    accent: 'bg-accent-500 hover:bg-accent-600 focus:ring-accent-500 text-white',
    warning: 'bg-warning-500 hover:bg-warning-600 focus:ring-warning-500 text-white',
    danger: 'bg-danger-500 hover:bg-danger-600 focus:ring-danger-500 text-white',
    neutral: 'bg-neutral-300 hover:bg-neutral-400 focus:ring-neutral-300 text-white'
  },
  varientOutline: {
    primary: 'border-primary-200 text-primary-500 hover:bg-primary-500 hover:border-primary-500 focus:ring-primary-200',
    secondary: 'border-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:border-secondary-500 focus:ring-secondary-200',
    success: 'border-success-200 text-success-500 hover:bg-success-500 hover:border-success-500 focus:ring-success-200',
    info: 'border-info-200 text-info-500 hover:bg-info-500 hover:border-info-500 focus:ring-info-200',
    accent: 'border-accent-200 text-accent-500 hover:bg-accent-500 hover:border-accent-500 focus:ring-accent-200',
    warning: 'border-warning-200 text-warning-500 hover:bg-warning-500 hover:border-warning-500 focus:ring-warning-200',
    danger: 'border-danger-200 text-danger-500 hover:bg-danger-500 hover:border-danger-500 focus:ring-danger-200',
    neutral: 'border-neutral-200 text-neutral-500 hover:bg-neutral-500 hover:border-neutral-500 focus:ring-neutral-200'
  }
}

function Button({
  children,
  primary,
  secondary,
  success,
  info,
  accent,
  warning,
  danger,
  neutral,
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
    [`${styles.varient.success}`]: success,
    [`${styles.varient.info}`]: info,
    [`${styles.varient.accent}`]: accent,
    [`${styles.varient.warning}`]: warning,
    [`${styles.varient.danger}`]: danger,
    [`${styles.varient.neutral}`]: neutral,
    [`${styles.pill}`]: rounded,
    [`${styles.baseOutline}`]: outline,
    [`${styles.varientOutline.primary}`]: outline && primary,
    [`${styles.varientOutline.secondary}`]: outline && secondary,
    [`${styles.varientOutline.success}`]: outline && success,
    [`${styles.varientOutline.info}`]: outline && info,
    [`${styles.varientOutline.accent}`]: outline && accent,
    [`${styles.varientOutline.warning}`]: outline && warning,
    [`${styles.varientOutline.danger}`]: outline && danger,
    [`${styles.varientOutline.neutral}`]: outline && neutral,
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