import { connect } from 'react-redux';
import { nextQuestion, showResult } from '../store/actiontypes/actions';

const quizButtonGrp = (props) => {
  const qNum = props.qNo;
  return (
    <div class="btn-group">
      {
        qNum < 4 ? <button class="next" onClick={() => props.nextQsn()}>Next</button> : null
      }
      <button class="result" onClick={()=>props.showResutl()}>Show Result</button>
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