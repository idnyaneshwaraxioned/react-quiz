import { GET_QUESTIONS, NEXT_QUESTION, QUIZ_RESTART, QUIZ_START, SHOW_RESULT } from "../actions/actiontypes"

const initialState = {
  quizStatus: 'stop',
  questions: [],
  qNumber: 0,
  showResult:false
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_START:
      return { ...state, quizStatus: action.payload,showResult:false }
    case QUIZ_RESTART:
      return { ...state, quizStatus: action.payload }
    case GET_QUESTIONS:
      return { ...state, questions: action.payload }
    case NEXT_QUESTION:
      return { ...state, qNumber: state.qNumber + 1 }
    case SHOW_RESULT:
      return {...state,showResult:true}
    default:
      return state
  }
}

export default quizReducer