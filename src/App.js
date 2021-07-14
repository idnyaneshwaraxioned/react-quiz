import { connect } from 'react-redux';
import './App.css';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';

function App(props) {
  const quizStatus = props.quizStatus;
  
  return (
    <div className="App">
      {
        quizStatus==="start"?<Quiz/>:<Home/>
      }
      
    </div>
  );
}

const mapStateToPorps = (state)=>{
  return {
    quizStatus:state.quizReducer.quizStatus
  }
}

export default connect(mapStateToPorps,null)(App);
