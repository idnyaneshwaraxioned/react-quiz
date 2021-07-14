import { connect } from 'react-redux';

const timer = (props) => {
  const qNum = props.qNo;
  return (
    <div class="timer">
      <div class="question-count">
        <p>Out of: <span class="count">{qNum + 1}</span>/<span>5</span></p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.quizReducer.questions)
  return {
    qNo: state.quizReducer.qNumber
  }
}

export default connect(mapStateToProps, null)(timer)