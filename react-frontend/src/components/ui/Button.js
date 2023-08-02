import classnames from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  info,
  accent,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const colorVarients = {
    base: 'py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 focus:outline-none focus:ring-2',
    baseOutline: 'bg-white border-2 font-semibold hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
    primarySolid: 'bg-primary-400 hover:bg-primary-600 focus:ring-primary-400 text-white',
    primaryOutline: 'border-primary-200 text-primary-500 hover:bg-primary-500 hover:border-primary-500 focus:ring-primary-200',
    secondarySolid: 'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 text-white',
    secondaryOutline: 'border-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:border-secondary-500 focus:ring-secondary-200',
    successSolid: 'bg-success-500 hover:bg-success-600 focus:ring-success-500 text-white',
    successOutline: 'border-success-200 text-success-500 hover:bg-success-500 hover:border-success-500 focus:ring-success-200',
    infoSolid: 'bg-info-500 hover:bg-info-600 focus:ring-info-500 text-white',
    infoOutline: 'border-info-200 text-info-500 hover:bg-info-500 hover:border-info-500 focus:ring-info-200',
    accentSolid: 'bg-accent-500 hover:bg-accent-600 focus:ring-accent-500 text-white',
    accentOutline: 'border-accent-200 text-accent-500 hover:bg-accent-500 hover:border-accent-500 focus:ring-accent-200',
    warningSolid: 'bg-warning-500 hover:bg-warning-600 focus:ring-warning-500 text-white',
    warningOutline: 'border-warning-200 text-warning-500 hover:bg-warning-500 hover:border-warning-500 focus:ring-warning-200',
    dangerSolid: 'bg-danger-500 hover:bg-danger-600 focus:ring-danger-500 text-white',
    dangerOutline: 'border-danger-200 text-danger-500 hover:bg-danger-500 hover:border-danger-500 focus:ring-danger-200'
  }
  
  const classes = classnames(rest.className, colorVarients.base, {
    [`${colorVarients.primarySolid}`]: primary,
    [`${colorVarients.secondarySolid}`]: secondary,
    [`${colorVarients.successSolid}`]: success,
    [`${colorVarients.infoSolid}`]: info,
    [`${colorVarients.accentSolid}`]: accent,
    [`${colorVarients.warningSolid}`]: warning,
    [`${colorVarients.dangerSolid}`]: danger,
    'rounded-full': rounded,
    [`${colorVarients.baseOutline}`]: outline,
    [`${colorVarients.primaryOutline}`]: outline && primary,
    [`${colorVarients.secondaryOutline}`]: outline && secondary,
    [`${colorVarients.successOutline}`]: outline && success,
    [`${colorVarients.infoOutline}`]: outline && info,
    [`${colorVarients.accentOutline}`]: outline && accent,
    [`${colorVarients.warningOutline}`]: outline && warning,
    [`${colorVarients.dangerOutline}`]: outline && danger
  });

  const mergedClasses = twMerge(classes)

  return (
    <button {...rest} className={mergedClasses}>
      {children}
    </button>
  ); 
}

export default Button;