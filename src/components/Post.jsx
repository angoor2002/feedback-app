import React from 'react'
// import { useParams } from 'react-router-dom'
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
function Post() {
    const navigate = useNavigate()
    const status = 200
    if (status === 404) {
        return <Navigate to='/notfound' />
    }
    // const params = useParams();
    const onClick = () => {
        console.log("Hello");
        navigate("/about")
    }
    return (
        <div>
            {/* POST {params.id} */}
            <button onClick={onClick}>Button</button>
            <Routes>
                <Route path="/show" element={<h1>Hello World</h1>} />
                {/* appends to the already existing route */}
            </Routes>
        </div >
    )
}

export default Post
