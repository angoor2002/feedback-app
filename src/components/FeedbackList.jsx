import React from 'react'
// import data from '../data/feedbackdata'
import Feedbackitem from './Feedbackitem'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length == 0) {
        return (
            <p>
                No feedback yet
            </p>
        )
    }
    else
        return (
            <div>
                {/* {console.log(feedback)} */}
                {feedback.map((item, index) => (
                    <Feedbackitem key={item.id} item={item} index={index} />
                ))}
            </div>
        )
}

export default FeedbackList
