import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'
function Header({ text, bgColor, textColor }) {

    const styles = {
        backgroundColor: bgColor,
        color: textColor
    };
    return (
        <header style={styles}>
            <div className='container'>
                <h1>
                    {text}
                </h1>
            </div>
        </header>
    )
}
Header.defaultProps = {
    text: 'FeedBack UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.prototype = {
    text: PropTypes.string,
}

export default Header
