import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizQuestion from '../../component/quizQuestion';
import { correctOption, getQuestions, getTimer, restartQuiz, selectOption, showResult } from '../../store/action/actions';
import Timer from '../../component/timer';
import QuizButtonGrp from '../../component/quizButtonGrp';
import ShowResult from '../../component/showResult';

class Quiz extends Component {

  componentDidMount() {
    let counter = {
      min: 2,
      sec: 6
    }
    const stopWatch = () => {
      counter.sec--
      if (counter.sec === 0) {
        counter.sec = 6
        counter.min--
      }

      if (counter.sec === 1 && counter.min === 1) {
        clearInterval(setTimer)
        this.props.showResutl()
      }
      this.props.getTimer(counter)
    }

    const setTimer = setInterval(stopWatch, 1000)

  }

  render() {
    console.log(this.props, "---------")
    const { qNo, question, restartQuiz, showResult, selectAns, correctAns, correctCount, chooseOption, timer, attempQsn } = this.props;
    return (
      <div className="quiz-container">
        {
          showResult ? <ShowResult
            restartQuiz={restartQuiz}
            correctCount={correctCount}
            allQsn={question.length}
            attempQsn={attempQsn}
          /> :
            <div>
              <Timer qNo={qNo} timer={timer}/>
              <QuizQuestion
                question={question}
                qNo={qNo}
                selectAns={selectAns}
                correctAns={correctAns}
                chooseOption={chooseOption}
              />
              <QuizButtonGrp />
            </div>
        }
      </div>
    )
  }
}

const mapStateToPorps = (state) => {
  return {
    question: state.quizReducer.questions,
    qNo: state.quizReducer.qNumber,
    showResult: state.quizReducer.showResult,
    chooseOption: state.quizReducer.chooseOption,
    correctOption: state.quizReducer.correctOption,
    correctCount: state.quizReducer.correctCount,
    attempQsn: state.quizReducer.attempQsn,
    timer:state.quizReducer.timer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuizQquestion: (data) => dispatch(getQuestions(data)),
    restartQuiz: () => dispatch(restartQuiz()),
    selectAns: (data) => dispatch(selectOption(data)),
    correctAns: (data) => dispatch(correctOption(data)),
    showResutl: () => dispatch(showResult()),
    getTimer: (data) => dispatch(getTimer(data))
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Quiz)