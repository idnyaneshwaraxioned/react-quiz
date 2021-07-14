import { CORRECT_OPTION, GET_QUESTIONS, GET_TIMER, NEXT_QUESTION, QUIZ_RESTART, QUIZ_START, SELECT_OPTION, SHOW_RESULT } from "../actiontypes/actiontypes"

const initialState = {
  quizStatus: 'stop',
  questions: [],
  qNumber: 0,
  showResult: false,
  chooseOption: null,
  correctOption: null,
  correctCount: 0,
  attempQsn: 0,
  timer:{min:2,sec:6}
}

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_START:
      return { ...state, quizStatus: action.payload, qNumber: 0, showResult: false, correctCount: 0,attempQsn: 0,chooseOption:null }
    case QUIZ_RESTART:
      return { ...state, quizStatus: action.payload }
    case GET_QUESTIONS:
      return { ...state, questions: action.payload }
    case NEXT_QUESTION:
      let count = state.correctCount;
      (state.chooseOption === state.correctOption) && count++;
      return { ...state, qNumber: state.qNumber + 1, correctCount: count,chooseOption: null }
    case SHOW_RESULT:
      let count2 = state.correctCount;
      (state.chooseOption === state.correctOption) && count2++;
      return { ...state, showResult: true, correctCount: count2 }
    case SELECT_OPTION:
      return { ...state, chooseOption: action.payload }
    case CORRECT_OPTION:
      return { ...state, correctOption: action.payload,attempQsn:state.attempQsn+1 }
    case GET_TIMER:{
      return { ...state, timer:action.payload }
    }
    default:
      return state
  }
}

export default quizReducer