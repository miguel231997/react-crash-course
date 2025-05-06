import './App.css';
import Todo from './components/Todo';
import Title from './components/Title';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}> Add todo</button>
      </div>
      <Todo title="Finish Frontend Simplified" paragraph="Code along step by step" />
      <Todo title="Finish Interview Section" paragraph="Finish every interview in the next 2 weeks" />
      <Todo title="Land $100k Job" paragraph="Apply to 100 jobs" />
      {showModal && <Modal confirmation ="Are you sure?" /> }

      <Counter />
    </div>
  );
}

export default App;
