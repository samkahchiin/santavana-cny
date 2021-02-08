import classes from './LinkButton.module.css'

const LinkButton = ({ btnText, redirectLink }) => (
  <button className={[classes.LinkButton, classes.Button].join(' ')}>
    <a href={redirectLink}>{btnText}</a>
  </button>
)

export default LinkButton
