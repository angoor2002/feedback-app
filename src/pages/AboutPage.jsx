import React from 'react'
import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'
function AboutPage() {
    return (
        <div className='about'>
            <Card>
                This is a React App to leave a feedback for a product or service
            </Card>
            <Link to="/">
                <p>
                    <a href="/">Back to Home</a>
                </p>
            </Link>
        </div>
    )
}

export default AboutPage
