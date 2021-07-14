import { connect } from 'react-redux';
import { nextQuestion, showResult } from '../store/action/actions';

const quizButtonGrp = (props) => {
  const qNum = props.qNo;
  return (
    <div className="btn-group">
      {
        qNum < 4 ? <button className="next" onClick={() => props.nextQsn()}>Next</button> : null
      }
      <button className="result" onClick={()=>props.showResutl()}>Show Result</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    qNo: state.quizReducer.qNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextQsn: () => dispatch(nextQuestion()),
    showResutl: ()=>dispatch(showResult())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(quizButtonGrp)