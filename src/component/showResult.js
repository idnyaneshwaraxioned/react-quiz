import { connect } from "react-redux"
import { restartQuiz } from "../store/actiontypes/actions"

const showResult = (props) => {
  return (
    <div className="resultShow">
      <h3 className="result-score">Score</h3>
      <p>Correct Answer: <span className="rightcount"></span></p>
      <p>Wrong Answer: <span className="wrongcount"></span></p>
      <p>Attempt Question: <span className="attemptCount"></span></p>
      <button className="restart" onClick={()=>props.restartQuiz()}>Restart</button>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    restartQuiz:()=>dispatch(restartQuiz())
  }
}

export default connect(null,mapDispatchToProps)(showResult)