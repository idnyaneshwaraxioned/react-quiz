
const Timer = (props) => {
  const qNum = props.qNo;
  const timer = props.timer;
  return (
    <div className="timer">
      <div className="question-count">
        <p>Out of: <span className="count">{qNum + 1}</span>/<span>5</span></p>
      </div>
      <div className="countdown">
        <p>Time Left: <span className="quizCounter">{timer.min}:{timer.sec}</span></p>
      </div>
    </div>
  )
}

export default Timer