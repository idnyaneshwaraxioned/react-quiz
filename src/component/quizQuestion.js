import { connect } from 'react-redux';

const quizQuestion = (props) => {
  const Qsn = props.question;
  const qNo = props.qNo;
  return (
    <div className="q-ans">
      <p className="Quizquestion">{Qsn[qNo].question}</p>
      <div className="ans-options">
      {
      Qsn[qNo].options.map((opsn,index) => (
          <a href="#FIXME" title={opsn} class="options" data-opt={index} key={index}>{opsn}</a>
      ))
      }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.quizReducer.questions)
  return {
    question: state.quizReducer.questions,
    qNo: state.quizReducer.qNumber
  }
}

export default connect(mapStateToProps, null)(quizQuestion)