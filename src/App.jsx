import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [arr, setArr] = useState([]);
  return (
    <div>
      <Form setArr={setArr}/>
      <List arr={arr}/>
    </div>
  );
}

export default App;
