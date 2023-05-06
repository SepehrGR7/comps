import classNames from 'classnames'

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classNames(rest.className, 'flex items-center px-3 py-2 border', {
    'bg-purple-700 border-purple-700': primary,
    'bg-gray-700 border-gray-700': secondary,
    'bg-green-500 border-green-500': success,
    'bg-orange-400 border-orange-400': warning,
    'bg-red-500 border-red-500': danger,
    'rounded-full': rounded,
    'bg-transparent ': outline,
    'text-purple-700': outline && primary,
    'text-gray-700': outline && secondary,
    'text-green-500': outline && success,
    'text-orange-400': outline && warning,
    'text-red-500': outline && danger
  })

  return (
    <button {...rest} className={`${classes}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  checkVariatonValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger)

    return count > 1 && new Error('Only one of variatons can be true')
  }
}

export default Button
