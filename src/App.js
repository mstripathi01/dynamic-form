import {useState} from 'react';
import './App.css';

function App() {

const [formfield, setformfield] = useState([{
  name : '' , age : ''},
])

const handleFormChange = (event,index)=> {
  let data = [...formfield];
  data[index][event.target.name] = [event.target.value];
  setformfield(data);
}
const submit = (e) => {
  e.preventDefault();
  console.log(formfield);
}

const addfield = ()=> {
  let object = {
    name : '',
    age : ''
  }
  setformfield([...formfield,object])
}

const removefield = (index)=>{
  let data = [...formfield];
  data.splice(index,1);
  setformfield(data)
}

return (
    <div className="App">
    <form onSubmit={submit}>
     {formfield.map((form,index) => {
      return (
        <div key = {index}>
          <input
            name='name'
            placeholder='Name'
            onChange = {event => handleFormChange(event,index)}
            value = {form.name}
          />
          <input
            name='age'
            placeholder='Age'
            onChange = {event => handleFormChange(event,index)}
            value = {form.age}
          />
          <button onClick={() => removefield(index)}>Remove</button>
        </div>
      )
    })}
    
      </form> 
      <button onClick={addfield}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
