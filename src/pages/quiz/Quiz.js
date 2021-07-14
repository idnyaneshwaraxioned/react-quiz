import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizQuestion from '../../component/quizQuestion';
import { getQuestions } from '../../store/actiontypes/actions';
import { qData } from '../../component/questions'
import Timer from '../../component/timer';
import QuizButtonGrp from '../../component/quizButtonGrp';
import ShowResult from '../../component/showResult';

class Quiz extends Component {

  componentDidMount() {
    this.props.getQuizQquestion(qData)
  }

  render() {
    return (
      <div class="quiz-container">
        {
          this.props.showResult ? <ShowResult /> :
            <div>
              <Timer />
              <QuizQuestion />
              <QuizButtonGrp />
            </div>
        }
      </div>
    )
  }
}

const mapStateToPorps = (state) => {
  return {
    qNo: state.quizReducer.qNumber,
    showResult: state.quizReducer.showResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuizQquestion: (data) => dispatch(getQuestions(data))
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Quiz)