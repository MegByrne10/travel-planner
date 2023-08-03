
const styles = {
  input: 'block peer py-1.5 w-full border-b-2 bg-transparent outline-none border-neutral-300 focus:outline-none focus:ring-0 focus:border-primary-400 focus:border-b-2 transistion-colors duration-300',
  label: 'absolute left-0 top-1 text-neutral-400 cursor-text peer-focus:text-xs transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 transistion-all duration-300'
}

function FloatingLabelInput({ type = "text", name, children, ...rest }) {
  return (
    <div className='relative z-0'>
      <input
        {...rest}
        type={type} 
        id={name}
        name={name} 
        className={styles.input}
        placeholder=" "
        autoComplete='off'
      />
      <label htmlFor={name} className={styles.label}>
        {children}
      </label>
    </div>
  )
}

export default FloatingLabelInput;