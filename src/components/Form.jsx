import { useState } from 'react';
import './Form.css';

function Form({ setArr }) {
  const [obj, setObj] = useState({ name: '', age: '' });

  function handleChange(e) {
    setObj((prevObj) => ({ ...prevObj, [e.target.name]: e.target.value }));
  }

  function handleObj(e) {
    e.preventDefault();
    setArr((prevArr) => [...prevArr, obj]);
    setObj({ name: '', age: '' });
  }
  return (
    <form onSubmit={handleObj}>
      <label>
        Enter Your Name
        <input type='text' placeholder='Youssef' name='name' onChange={handleChange} value={obj.name} />
      </label>
      <label>
        Enter Your Age
        <input type='number' placeholder='1' name='age' onChange={handleChange} value={obj.age} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default Form;
