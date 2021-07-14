
const ShowResult = (props) => {
  return (
    <div className="resultShow">
      <h3 className="result-score">Score</h3>
      <p>Correct Answer: <span className="rightcount">{props.correctCount}</span></p>
      <p>Wrong Answer: <span className="wrongcount">{props.allQsn-props.correctCount}</span></p>
  <p>Attempt Question: <span className="attemptCount">{props.attempQsn}</span></p>
      <button className="restart" onClick={() => props.restartQuiz()}>Restart</button>
    </div>
  )
}

export default ShowResult