import React from 'react'
import "../index.css"
import { FaTimes, FaEdit } from "react-icons/fa"
import Card from './shared/Card'
import propTypes from 'prop-types'
import { useState } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function Feedbackitem({ item, index }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
    // const handleClick = () => {
    //     setrating((prev) => {
    //         return prev + 1;
    //     });
    //     settext("Click Handled");
    // }
    let reverse = true;
    if (index % 2 == 0) {
        reverse = false;
    }
    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => { deleteFeedback(item.id) }}>
                <FaTimes color='purple' /></button>
            <button className='edit' onClick={() => { editFeedback(item) }}>
                <FaEdit color='purple' /></button>
            <div className='text-display'>{item.text}</div>
            {/* <button onClick={handleClick}>Click me bitch</button> */}
        </Card >
    )
}

Feedbackitem.propTypes = {
    item: propTypes.object.isRequired,

}
export default Feedbackitem
