const Button = ({ btnText, btnStyle = {} }) => {
  return (
    <button
      style={{
        ...btnStyle,
        position: 'absolute',
        margin: '0 auto',
        bottom: '5%',
        left: 0,
        right: 0,
        width: '30%',
        fontSize: '14pt',
        borderRadius: '10pt',
        cursor: 'pointer',
        border: 'solid 1.5px #E0A91A',
        backgroundColor: '#E0A91A',
        color: '#FFF6E0',
      }}
    >
      {btnText}
    </button>
  )
}

export default Button
