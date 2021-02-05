import Tappable from 'react-tappable/lib/Tappable'

const PRIMARY_COLOR = '#E0A91A'
const SECONDARY_COLOR = '#FFF6E0'
const TERTIARY_COLOR = '#695237'

const Button = ({ btnText, btnStyle = {}, onClick }) => (
  <Tappable onTap={onClick}>
    <button
      style={{
        ...btnStyle,

        padding: '5pt',
        fontSize: '14pt',
        borderRadius: '15pt',
        cursor: 'pointer',
        border: `solid 1.5pt ${SECONDARY_COLOR}`,
        backgroundColor: PRIMARY_COLOR,
        color: SECONDARY_COLOR,

        '&hover': {
          border: `solid 1.5pt ${PRIMARY_COLOR}`,
          backgroundColor: SECONDARY_COLOR,
          color: PRIMARY_COLOR,
        },
      }}
    >
      {btnText}
    </button>
  </Tappable>
)

export default Button
