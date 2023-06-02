import { children, createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext=createContext();

export const FeedBackprovider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:"This is feedback item no 1",
            rating:10 
        },
        {
            id:2,
            text:"This is feedback item no 2",
            rating:8
        },
        {
            id:3,
            text:"This is feedback item no 3",
            rating:7
        }
    ])
    const [FeedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false,
    })
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }
     const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      } 
      const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
      }
    const updateFeedback=(id,updItem)=>{
        setFeedback(
        feedback.map((item)=>(item.id===id?{...item,...updItem}:item)))//swappation
        setFeedbackEdit({
            updItem,
            edit:false
        })
        console.log(updItem)
    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        FeedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;