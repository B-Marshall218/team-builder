import React, { useState } from 'react';
import logo from './logo.svg';
import data from "./data";
import Members from "./Members"
import MemberForm from "./MemberForm.js"
import './App.css';

function App() {
  const [member, setMember] = useState(data);

  // const handleChange = event => {
  //   setMember(event.target.value);
  // };

  return (
    <div className="App">
      <MemberForm />
      <Members memberList={member} />
    </div>
  );
}

export default App;



/*
<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>

  */


/*
{console.log(member)}
    <form>
      <label>
        New Member:
        <input type="text" onChange={event => {
          handleChange(event)
      </label>
    </form>

*/

