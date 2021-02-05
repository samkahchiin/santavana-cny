import Tappable from 'react-tappable/lib/Tappable'
import classes from './Button.module.css'

const Button = ({ btnText, btnStyle = {}, className = [], onClick }) => (
  <Tappable onTap={onClick}>
    <button
      className={`${classes.Button} ${className.join(' ')}`}
      style={btnStyle}
    >
      {btnText}
    </button>
  </Tappable>
)

export default Button
