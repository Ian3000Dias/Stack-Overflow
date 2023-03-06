import React from 'react'
import { useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

  const user = 1;
  const navigate = useNavigate()
  const location = useLocation()

  const questionsList = useSelector(state => state.questionReducer)
  // console.log(questionsList)
  // var questionsList = [{ 
  //       _id: 1,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 2,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 2,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 3,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   }]

  
  const redirect = () => {
    alert("login or signup to ask a question")
    navigate('/Auth')
  }

  const checkAuth =() =>{
    if (user===null){
      redirect()
    }
    else{
      navigate('/AskQuestion')
    }
  }

  
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth}  className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading....</h1>:
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionsList questionsList={questionsList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar