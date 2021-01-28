import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button className='btn' style={{backgroundColor: props.color}} onClick={props.onClick}>{props.text}</button>
    )
}

Button.defaultProps = {
    text: 'Default',
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button