import axios from 'axios';
import {qData} from '../../component/questions';
const { QUIZ_START, GET_QUESTIONS, NEXT_QUESTION, QUIZ_RESTART, SHOW_RESULT } = require("../actions/actiontypes");

export const startQuiz = () => ({
  type: QUIZ_START,
  payload: "start"
})

export const restartQuiz = () => ({
  type: QUIZ_RESTART,
  payload: "restart"
})

// export const getQuestions = ()=>{
//   return (dispatch)=>{
//       axios(qData)
//       .then(resp=>dispatch({type:GET_QUESTIONS,payload:resp.data}))
//   }  
// }

export const getQuestions = (data)=>({
  type:GET_QUESTIONS,
  payload:data
})

export const nextQuestion = (data)=>({
  type:NEXT_QUESTION
})

export const showResult = ()=>({
  type:SHOW_RESULT
})