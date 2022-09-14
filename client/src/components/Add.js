import { useState, useEffect} from 'react'
import moment from 'moment'
import axios from 'axios'
import List from './List'



function Add() {

  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/grocery/get")
      .then((res) =>{
        setTodo(res.data)
        console.log(res.data);
      })
      .catch((err) => console.log(err)); 
  },[])

  const addUpdateTodo = () => {

    if (isUpdating === "") {
      axios.post("http://localhost:5000/grocery/create", {  groceryItem : text})
        .then((res) => {
          console.log(res.data);
          setText("");
        })
        .catch((err) => console.log(err));
    }else{
      axios.put("http://localhost:5000/grocery/update", {_id: isUpdating, groceryItem : text})
        .then((res) => {
          console.log(res.data);
          setText("");
          setUpdating("");
        })
        .catch((err) => console.log(err));
    }
  }

  const deleteTodo = (_id) => {
    axios.post("http://localhost:5000/grocery/delete", {_id})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  const updateTodo = (_id, groceryItem) => {
    setUpdating(_id);
    setText(groceryItem);
  }

  return (
    <>
      <h3 className="month">Plan for the month of {moment().format('MMMM')}</h3>
      <div className="App">
        <form class="row g-3">
          <div className="col-auto" >
            <label for="addInput" class="visually-hidden"></label>
            <input
              type="text"
              value={text}
              onChange={(e)=>setText(e.target.value)}
              style={{ width: 320 }}
              className="form-control"
              id="addInput"
              placeholder="Add Shopping Item"
            />
          </div>
          <div className="col-auto">
            <button type="submit" onClick={addUpdateTodo} class="btn btn-dark mb-3">
              Add
            </button> 
          </div>  
        </form> 
      </div>            
      {todo.map(item => 
          <List  
             key={item._id}
            text={item.groceryItem}
            remove={() => deleteTodo(item._id)}
            update={() => updateTodo(item._id, item.groceryItem)} />)}
    </>
  )
}

export default Add
