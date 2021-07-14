import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions, startQuiz } from '../../store/actiontypes/actions';
import {qData} from '../../component/questions'

class Home extends Component {

  btnHandler =()=>{
    this.props.startQuiz()
    this.props.getQuizQquestion(qData)
  }
  render() {
    return (
      <div class="welcome">
        <h2>Welcome to Quiz</h2>
        <button onClick={()=>this.btnHandler()}>Start Quiz</button>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    startQuiz:()=>dispatch(startQuiz()),
    getQuizQquestion: (data) => dispatch(getQuestions(data))
  }
}

export default connect(null,mapDispatchToProps)(Home)