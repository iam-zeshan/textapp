import './App.css';
import Header from "./MyComponents/Header";
import { Addtodo } from "./MyComponents/Addtodo";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
// import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
//import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am onDelete Function on ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // console.log("I am adding a new todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);    
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Header title="Todo List" searchBar={false} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
    // {
    //   <BrowserRouter>
    //     <Header title="Todo List" searchBar={false} />

    //     <Routes>
    //       <Route exact path="/" element={
    //       <>
    //         <Addtodo addTodo={addTodo} />
    //         <Todos todos={todos} onDelete={onDelete} />
    //       </>    
    //       }/>

    //       <Route exact path='/about' element={<About/>} />
    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>
    // }</>

  );
}

export default App;
//{
//   sno:1,
//   title: "Go to the Bazar",
//   desc: "I have to get some vegetables from the Bazar"
// },
// {
//   sno:2,
//   title: "Go to the University",
//   desc: "I have to attend the meeting with Sir"
// },
// {
//   sno:3,
//   title: "Go to the Barbarshop ",
//   desc: "I have to cut my hair "
// }
