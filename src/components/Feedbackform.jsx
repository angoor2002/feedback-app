import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function Feedbackform() {
    const [text, settext] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [rating, setRating] = useState(10);
    const [message, setMessage] = useState('');

    const { addFeedback, FeedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        // console.log("Hello")
        if (FeedbackEdit.edit == true) {
            setbtnDisabled(false)
            settext(FeedbackEdit.item.text)
            setRating(FeedbackEdit.item.rating)
        }
    }, [FeedbackEdit])//changes whenever FeedbackEdit changes

    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true);
            setMessage(null);
        }
        else if (text.length < 10 && text.length > 0) {
            setbtnDisabled(true);
            setMessage("text too short")
        }
        else if (text.length > 10) {
            setbtnDisabled(false);
            setMessage("text is perfect")
        }
        settext(e.target.value)
    }
    const selectRating = (rating) => {
        setRating(rating)
        console.log(rating)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating,
            }
            addFeedback(newFeedback);
            settext('')
            if (FeedbackEdit.edit === true) {
                updateFeedback(FeedbackEdit.item.id, newFeedback)
            }

        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RatingSelect select={selectRating} />
                <div className='input-group'>
                    <input type='text' placeholder='Write a review' onChange={handleTextChange} value={text}></input>
                    <Button type="submit" version="primary" isDisabled={btnDisabled} >Send</Button>
                </div>
                {message ? <div className='message'>{message}</div> : null}
            </form>
        </Card >
    )
}

export default Feedbackform
