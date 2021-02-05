import classes from './Button.module.css'

const Button = ({ btnText, btnStyle = {}, className = [], onClick }) => (
  <button
    onClick={onClick}
    className={`${classes.Button} ${className.join(' ')}`}
    style={btnStyle}
  >
    {btnText}
  </button>
)

export default Button
