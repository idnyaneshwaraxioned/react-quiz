
const QuizQuestion = (props) => {
  const Qsn = props.question;
  const qNo = props.qNo;
  const selectAns = props.selectAns;
  const correctAns = props.correctAns;
  const chooseOption = props.chooseOption;

  const btnHandler = (index, answer) => {
    selectAns(index + 1)
    correctAns(answer)
  }
  return (
    <div className="q-ans">
      <p className="Quizquestion">{Qsn[qNo].question}</p>
      <div className="ans-options">
        {
          Qsn[qNo].options.map((opsn, index) => (
            <a href="#FIXME"
              title={opsn}
              className={(chooseOption !== null && index === chooseOption - 1) ? "options correctOptions freez" : "options"}
              key={index}
              onClick={() => btnHandler(index, Qsn[qNo].answer)
              }
            >
              {opsn}
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default QuizQuestion