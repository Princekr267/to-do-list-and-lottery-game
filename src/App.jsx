// import Counter from './Counter';
import './App.css';
// import LudoBoard from './LudoBoard';
import ToDoList from './ToDoList';
import Lottery from './Lottery';
// import Ticket from './Ticket';

function App() {
  return (
    <>
      {/* <h1>States in React</h1>
      <Counter/>
      <LudoBoard/> */}
        <div className="final">
          <span className='to-do'><ToDoList/></span>
          <span className='lottery'><Lottery n={3} winningSum={15}/></span>
        </div>
    </>
  )
}

export default App
