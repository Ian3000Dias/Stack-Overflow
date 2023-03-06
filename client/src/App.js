import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Paths from './Paths';
import { fetchAllQuestions } from './actions/questions';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(fetchAllQuestions())
   dispatch(fetchAllUsers())
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Paths />
      </Router>
    </div>
  );
}

export default App;
