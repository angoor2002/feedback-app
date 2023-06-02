import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from 'react'

function aboutIconLink() {
    return (
        <div>
            <Link to={{
                pathname: '/about',
                // search: '?sort=name',
                // hash: '#hello'
            }}>
                <FaQuestion size={30} className="about-Link"></FaQuestion>
            </Link>
        </div>
    )
}

export default aboutIconLink
