import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


export const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task'
}

Header.propTypes = {
    title: PropTypes.string
}

