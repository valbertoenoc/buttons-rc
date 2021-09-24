import './styles.css'

function Button(props) {
    const shadow = props.disableShadow ? 'disableShadow' : ''
    const disabled = props.disabled ? 'disabled' : ''
    const className = `${props.variant} ${props.size} ${props.color} ${shadow} ${disabled}`

    if (!disabled) {
        return (
            <button className={className}>
                <span
                    className='material-icons'
                    style={{ paddingRight: '4px' }}
                >
                    {props.startIcon}
                </span>
                {props.children}
                <span className='material-icons' style={{ paddingLeft: '4px' }}>
                    {props.endIcon}
                </span>
            </button>
        )
    } else {
        return (
            <button className={className} disabled style={{ color: '#9E9E9E' }}>
                <span
                    className='material-icons'
                    style={{ paddingRight: '4px' }}
                >
                    {props.startIcon}
                </span>
                {props.children}
                <span className='material-icons' style={{ paddingLeft: '4px' }}>
                    {props.endIcon}
                </span>
            </button>
        )
    }
}

Button.defaultProps = {
    variant: 'default',
    disableShadow: false,
}

export default Button
