import Tappable from 'react-tappable/lib/Tappable'
import classes from './Button.module.css'

const Button = ({ btnText, btnStyle = {}, onClick }) => (
  <Tappable onTap={onClick}>
    <button className={classes.Button} style={btnStyle}>
      {btnText}
    </button>
  </Tappable>
)

export default Button
